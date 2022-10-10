import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Controller, useFormContext, useController } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";
export function FormRating({ name, label }) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
  });

  return (
    <FormControl error={!!error}>
      <Typography component="legend">{label}</Typography>
      <Rating name={name} value={parseInt(value)} onChange={onChange} />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
