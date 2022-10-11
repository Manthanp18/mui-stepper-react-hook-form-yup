import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export const FormDropdown = ({
  generateSingleOptions,
  label,
  error,
  value,
  onChange,
}) => {
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
