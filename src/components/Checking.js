import React from "react";

export default function Checking(ids,mails,passwords) {
  let error = {};
  if (!ids) {
    error.ids = "Provide Proper ID provided during Signup";
  } else if (ids.length < 4) {
    error.ids = "Name length must be more than 4";
  }

  if (!mails) {
    error.mails = "Provide Mail";
  } else if (mails.length < 5) {
    error.mails = "Mail ID length must be more than 5";
  }

  if (!passwords) {
    error.passwords = "Provide Password";
  } else if (passwords.length < 5) {
    error.passwords = "Password length must be more than 5";
  }

  return error;
}

