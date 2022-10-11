import React from "react";
import { FormRadioButton } from "../../../common/FormInputs/FormRadioButton/FormRadioButton";
import FormRadioButtonContainer from "../../../common/FormInputs/FormRadioButton/FormRadioButtonContainer";
import FormTextFieldContainer from "../../../common/FormInputs/FormTextField/FormTextFieldContainer";

export default function AddressDetail() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <FormTextFieldContainer label="Address" name="address" />
      <FormRadioButtonContainer label="Address Type" name="addressType" />
    </div>
  );
}
