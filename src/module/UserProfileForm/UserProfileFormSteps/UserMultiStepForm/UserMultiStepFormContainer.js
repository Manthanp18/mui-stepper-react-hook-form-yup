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
import Step1 from "../UserPersonalDetailForm";
import Step2 from "../UserAddressDetailForm";
import Step3 from "../UserJobDetailForm";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import UserMultiStepform from "./UserMultiStepform";

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
    <UserMultiStepform
      activeStep={activeStep}
      methods={methods}
      handleReset={handleReset}
      handleNext={handleNext}
      handleBack={handleBack}
      steps={steps}
      getStepContent={getStepContent}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}
