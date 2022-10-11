import React from "react";
import { Controller, useFormContext, useController } from "react-hook-form";
import { FormRating } from "./FormRating";

const FormRatingContainer = ({ name, label }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
  });
  return (
    <FormRating
      label={label}
      onChange={onChange}
      value={parseInt(value)}
      error={error}
      name={name}
    />
  );
};

export default FormRatingContainer;
