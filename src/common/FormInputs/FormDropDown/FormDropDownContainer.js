import React from "react";
import { FormDropdown } from "./FormDropDown";
import { MenuItem } from "@mui/material";
import { useController } from "react-hook-form";
const options = [
  {
    label: "Python developer",
    value: "Python Developer",
  },
  {
    label: "React Developer",
    value: "React Developer",
  },
  {
    label: "Php Developer",
    value: "Php Developer",
  },
];
const FormDropDownContainer = ({ name, label }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
  });
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };
  return (
    <FormDropdown
      generateSingleOptions={generateSingleOptions}
      options={options}
      onChange={onChange}
      value={value}
      error={error}
      label={label}
    />
  );
};

export default FormDropDownContainer;
