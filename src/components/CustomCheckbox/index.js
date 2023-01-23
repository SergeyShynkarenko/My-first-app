import React from 'react';
// material-ui
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
// libs
import { getIn } from 'formik';

const CustomCheckbox = ({ field, helperText, form: { errors, touched }, ...props }) => {
  const errorMessage = getIn(errors, field.name);
  const isError = errorMessage && getIn(touched, field.name);

  return (
    <FormControl error={isError} size='small'>
      <FormControlLabel
        {...field}
        {...props}
        control={<Checkbox checked={field.value} color='primary' />}
      />

      {helperText && !isError && <FormHelperText>{helperText}</FormHelperText>}
      {isError && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default CustomCheckbox;
