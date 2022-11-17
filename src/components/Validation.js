import React from "react";

export default function Validation(name, mail, password) {
  let errors = {};
  if (!name) {
    errors.name = "Provide Name";
  } else if (name.length < 5) {
    errors.name = "Name length must be more than 5";
  }

  if (!mail) {
    errors.mail = "Provide Mail";
  } else if (mail.length < 5) {
    errors.mail = "Mail ID length must be more than 5";
  }

  if (!password) {
    errors.password = "Provide Password";
  } else if (password.length < 5) {
    errors.password = "Password length must be more than 5";
  }

  return errors;
}

