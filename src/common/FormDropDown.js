import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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

export const FormDropdown = ({ name, control, label, helperText }) => {
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
    <FormControl size="small" error={!!error} style={{ width: "200px" }}>
      <InputLabel>{label}</InputLabel>
      <>
        <Select onChange={onChange} value={value} label={label}>
          {generateSingleOptions()}
        </Select>
        <FormHelperText>{error?.message}</FormHelperText>
      </>
    </FormControl>
  );
};
