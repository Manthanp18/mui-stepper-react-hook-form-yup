import React from "react";
import { FormDropdown } from "../../common/FormDropDown";
import { FormRating } from "../../common/FormRating";
import { TextFieldCustom } from "../../common/FormTextFieldCustom";
export default function JobDetail() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <FormDropdown label="Job Title" name="job" />
      <FormRating label="Rate you Job" name="ratingValue" />
    </div>
  );
}
