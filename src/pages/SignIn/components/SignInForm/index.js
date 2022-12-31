import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import {
  FormWrapper,
  FormTitle,
  FormSubTitle,
  FormButton,
  FormText,
} from "./styled";

const SignInForm = () => {
  return (
    <FormWrapper>
      <FormText>
        <FormTitle variant="h3">Hello</FormTitle>
        <FormSubTitle variant="h4">Sign Up to Get Started</FormSubTitle>
      </FormText>

      <TextField
        placeholder="Full Name"
        sx={{ m: 1, width: "400px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        placeholder="Email"
        sx={{ m: 1, width: "400px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        placeholder="Password"
        sx={{ m: 1, width: "400px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HttpsIcon />
            </InputAdornment>
          ),
        }}
      />

      <FormButton
        sx={{
          m: 1,
          background: "#000",
          padding: "16px",
          width: "400px",
          color: "#fff",
        }}
        variant="contained"
      >
        Register
      </FormButton>
    </FormWrapper>
  );
};

export default SignInForm;
