import * as React from "react";
import { TextField } from "@mui/material";

export const FormTextFieldCustom = ({
  name,
  label,
  control,
  onChange,
  error,
  defaultValue,
  value,
}) => {
  return (
    <TextField
      label={label}
      onChange={onChange}
      variant="outlined"
      size="small"
      control={control}
      helperText={error?.message}
      error={!!error}
      defaultValue={defaultValue}
      value={value}
      name={name}
    />
  );
};
