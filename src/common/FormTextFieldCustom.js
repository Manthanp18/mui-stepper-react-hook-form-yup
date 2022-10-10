import * as React from "react";
import { TextField } from "@mui/material";
import { useFormContext, useController } from "react-hook-form";
export const TextFieldCustom = ({ ...props }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController(props);

  const { control, formState } = useFormContext();

  return (
    <TextField
      {...props}
      onChange={onChange}
      variant="outlined"
      size="small"
      control={control}
      helperText={error?.message}
      error={!!error}
      defaultValue={props.defaultValue}
      value={value}
      name={props.name}
    />
  );
};
