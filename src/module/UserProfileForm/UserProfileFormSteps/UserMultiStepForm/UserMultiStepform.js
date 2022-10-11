import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper,
  Container,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
const UserMultiStepform = ({
  activeStep,
  methods,
  handleNext,
  handleReset,
  handleSubmit,
  handleBack,
  steps,
  getStepContent,
  onSubmit,
}) => {
  return (
    <div>
      <Container
        style={{
          display: "grid",
          width: "100%",
          gridRowGap: "20px",
          padding: "100px",
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
    </div>
  );
};

export default UserMultiStepform;
