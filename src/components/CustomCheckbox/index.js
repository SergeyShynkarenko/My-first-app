import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import React from 'react';

const CustomCheckbox = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div>
      <FormControlLabel
        {...field}
        {...props}
        control={<Checkbox checked={field.value} color='primary' />}
      />

      {touched[field.name] && errors[field.name] && (
        <FormHelperText error>{errors[field.name]}</FormHelperText>
      )}
    </div>
  );
};

export default CustomCheckbox;
