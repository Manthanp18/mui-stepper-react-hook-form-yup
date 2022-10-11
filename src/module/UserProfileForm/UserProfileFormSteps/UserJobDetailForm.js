import React from "react";
import { FormDropdown } from "../../../common/FormInputs/FormDropDown/FormDropDown";
import FormDropDownContainer from "../../../common/FormInputs/FormDropDown/FormDropDownContainer";
import { FormRating } from "../../../common/FormInputs/FormRating/FormRating";
import FormRatingContainer from "../../../common/FormInputs/FormRating/FormRatingContainer";
import { TextFieldCustom } from "../../../common/FormInputs/FormTextField/FormTextFieldCustom";
export default function JobDetail() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <FormDropDownContainer label="Job Title" name="job" />
      <FormRatingContainer label="Rate you Job" name="ratingValue" />
    </div>
  );
}
