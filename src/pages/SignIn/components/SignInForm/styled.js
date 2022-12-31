import { Box, Typography, Button, styled } from "@mui/material";

export const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
});

export const FormTitle = styled(Typography)({
  marginBottom: "10px",
  fontSize: "21px",
  fontWeight: "bold",
});

export const FormSubTitle = styled(Typography)({
  marginBottom: "25px",
  fontSize: "14px",
});

export const FormButton = styled(Button)({
  border: "1px solid black",
  "&:hover": {
    backgroundColor: "white",
    boxShadow: "none",
    color: "black",
  },
});

export const FormText = styled(Box)({
  width: "400px",
});
