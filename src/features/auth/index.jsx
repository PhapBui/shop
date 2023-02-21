import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm.jsx";

const Register = () => {
  const handleSubmit = (value) => {
    console.log("form submid: ", value);
  };
  return (
    <>
      <div>Register Page</div>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default Register;
