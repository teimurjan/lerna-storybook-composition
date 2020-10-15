import React from "react";
import MUIButton from "@material-ui/core/Button";

const Button = ({ type, disabled, children }) => (
  <MUIButton variant="contained" color={type} disabled={disabled}>
    {children}
  </MUIButton>
);
export default Button;
