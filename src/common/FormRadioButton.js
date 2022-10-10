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

const options = [
  {
    label: "Permanent Address",
    value: "Permanent Address",
  },
  {
    label: "Temperory Address",
    value: "Temporary Address",
  },
];

export const FormRadioButton = ({
  name,

  label,
  errors,
  helperText,
}) => {
  const { control } = useFormContext;
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

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
