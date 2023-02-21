import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
const InputField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const hasError = formState.errors[name] && formState.touchedFields[name];

  return (
    <Controller
      name={name}
      control={form.control}
      defaultValue=""
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => {
        return (
          <TextField
            value={value}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={formState.errors[name]?.message}
          />
        );
      }}
    />
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
