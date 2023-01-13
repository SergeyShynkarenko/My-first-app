import React from 'react';
// material-ui
import { FormControl, FormLabel, TextField } from '@mui/material';
// libs
import { getIn } from 'formik';

const CustomInput = ({
  field,
  label,
  inputProps,
  helperText,
  type = 'text',
  form: { errors, touched },
  required,
  ...props
}) => {
  const errorMessage = getIn(errors, field.name);
  const isError = errorMessage && getIn(touched, field.name);

  return (
    <FormControl sx={{ width: '250px' }}>
      {label && <FormLabel required={required}>{label}</FormLabel>}

      <TextField
        {...field}
        type={type}
        variant='outlined'
        inputProps={{
          autoComplete: 'new-password',
          form: {
            autoComplete: 'off',
          },
          ...inputProps,
        }}
        error={isError}
        helperText={isError ? errorMessage : helperText}
        {...props}
      />
    </FormControl>
  );
};

export default CustomInput;
