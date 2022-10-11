import React from "react";
import FormTextFieldContainer from "../../../common/FormInputs/FormTextField/FormTextFieldContainer";

export default function Personaldetail() {
  return (
    <div>
      <FormTextFieldContainer label="First name" name="firstName" />
      <br />
      <br />
      <FormTextFieldContainer label="Last name" name="lastName" />
    </div>
  );
}
