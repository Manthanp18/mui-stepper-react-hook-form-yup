import React from "react";
import { FormTextFieldCustom } from "./FormTextFieldCustom";
import { useFormContext, useController } from "react-hook-form";

function FormTextFieldContainer({ name, label }) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, label });

  const { control, formState } = useFormContext();
  return (
    <div>
      <FormTextFieldCustom
        onChange={onChange}
        value={value}
        error={error}
        control={control}
        name={name}
        label={label}
      />
    </div>
  );
}

export default FormTextFieldContainer;
