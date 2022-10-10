import React from "react";
import { FormRadioButton } from "../../common/FormRadioButton";
import { TextFieldCustom } from "../../common/FormTextFieldCustom";
export default function AddressDetail() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <TextFieldCustom label="Address" name="address" />
      <FormRadioButton label="Address Type" name="addressType" />
    </div>
  );
}
