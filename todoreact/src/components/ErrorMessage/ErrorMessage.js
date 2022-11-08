import React from "react";
import { ERRORMESSAGE } from "../CONFIG/Config";

export default function ErrorMessage({ validator }) {
  return (
    <div className={`error-message ${validator ? "hidden" : ""}`}>
      <ERRORMESSAGE />
    </div>
  );
}
