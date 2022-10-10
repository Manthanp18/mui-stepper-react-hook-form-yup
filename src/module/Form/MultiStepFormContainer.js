import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper,
  Container,
} from "@mui/material";

import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Step1 from "../steps/PersonalDetail";
import Step2 from "../steps/AddressDetail";
import Step3 from "../steps/JobDetail";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";



const defaultValues = {
  firstName: "",
  lastName: "",
  address: "",
  job: "",
  ratingValue: 0,
  addressType: "",
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
    default:
      return "Unknown step";
  }
}

// const useYupValidationResolver = (validationSchema) =>
//   useCallback(
//     async (data) => {
//       try {
//         const values = await validationSchema.validate(data, {
//           abortEarly: false,
//         });

//         return {
//           values,
//           errors: {},
//         };
//       } catch (errors) {
//         return {
//           values: {},
//           errors: errors.inner.reduce(
//             (allErrors, currentError) => ({
//               ...allErrors,
//               [currentError.path]: {
//                 type: currentError.type ?? "validation",
//                 message: currentError.message,
//               },
//             }),
//             {}
//           ),
//         };
//       }
//     },
//     [validationSchema]
//   );

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step1", "Step2", "Step3"];
  // console.log(activeStep);
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
    handleNext();
  };

  const validationSchema = [
    //validation for step1
    yup.object({
      firstName: yup.string().required("First Name is Mendatory"),
      lastName: yup.string().required(),
    }),
    //validation for step2
    yup.object({
      address: yup
        .string()
        .min(5, "Address must 5 character long")
        .required("this field is required"),
      addressType: yup.string().required(),
    }),
    //validation for step3
    yup.object({
      job: yup.string().required(),
      ratingValue: yup
        .number()
        .min(1, "Please select atleast 1 value")
        .required("Please provide atleast one value"),
    }),
  ];
  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    // shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange",
  });
  const { handleSubmit, reset, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <Container
      style={{
        display: "grid",
        width: "100%",
        gridRowGap: "20px",
        padding: "100px",
        // height: "600px",
      }}>
      <Paper elevation={1} style={{ padding: "40px" }}>
        <Stepper activeStep={activeStep} style={{ padding: "10px" }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
            <>
              <Button onClick={handleReset}>Reset</Button>
            </>
          ) : (
            <FormProvider {...methods}>
              <form>
                <div>{getStepContent(activeStep)}</div>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ paddingTop: "5vh" }}>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}>
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}>
                      Next
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </div>
      </Paper>
    </Container>
  );
}
