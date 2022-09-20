import React, { useContext } from "react";

import { Container, Text } from "./SignIn.styled";

import { AuthContext } from "../../auth/context";
import {
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "../../components/form/Form.styled";
import { redirect, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    login(data);
    navigate("/");
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handelSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput name="email" type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput name="password" type="password" required />
              <FormButton type="submit">Sign In</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
