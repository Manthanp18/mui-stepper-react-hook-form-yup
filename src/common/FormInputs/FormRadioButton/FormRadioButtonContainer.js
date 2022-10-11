import React from "react";
import { FormRadioButton } from "./FormRadioButton";
import { Controller, useController, useFormContext } from "react-hook-form";
import { FormControlLabel, Radio } from "@mui/material";

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
const FormRadioButtonContainer = ({ name }) => {
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
    <FormRadioButton
      generateRadioOptions={generateRadioOptions}
      control={control}
      onChange={onChange}
      value={value}
      error={error}
    />
  );
};

export default FormRadioButtonContainer;
