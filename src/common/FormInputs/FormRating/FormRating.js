import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { FormControl, FormHelperText } from "@mui/material";
export function FormRating({ name, label, error, onChange, value }) {
  return (
    <FormControl error={!!error}>
      <Typography component="legend">{label}</Typography>
      <Rating name={name} value={value} onChange={onChange} />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
