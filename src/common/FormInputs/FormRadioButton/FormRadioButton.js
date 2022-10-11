import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useController, useFormContext } from "react-hook-form";

export const FormRadioButton = ({
  generateRadioOptions,
  label,

  onChange,
  value,
  error,
}) => {
  return (
    <FormControl error={!!error} style={{ marginTop: " 20px" }}>
      <FormLabel>{label}</FormLabel>

      <>
        <RadioGroup value={value} onChange={onChange}>
          {generateRadioOptions()}
        </RadioGroup>
        <FormHelperText>{error?.message}</FormHelperText>
      </>
    </FormControl>
  );
};
