import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormInput,
  FormButton,
  FormLabel,
  Text,
} from "./SignIn.styled";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">STALION'S</Icon>
          <FormContent>
            <Form action="">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" requierd />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" requierd />
              <FormButton type="submit">Sign In</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
