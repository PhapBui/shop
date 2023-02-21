import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";
import InputField from "components/FormControls/InputField/index.jsx";
import React from "react";

const RegisterForm = (props) => {
  const schema = yup
    .object({
      title: yup
        .string()
        .required("Please enter title")
        .min(5, "ngheo chu qua"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }

    form.reset({ title: "" });
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField
        name="title"
        label="Register"
        form={form}
      />
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
