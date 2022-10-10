import React from "react";
import { TextFieldCustom } from "../../common/FormTextFieldCustom";
export default function Personaldetail() {
  return (
    <div>
      <TextFieldCustom label="First name" name="firstName" />
      <br />
      <br />
      <TextFieldCustom label="Last name" name="lastName" />
    </div>
  );
}
