import React from "react";
import {
  StyledContainer,
  StyledForm,
  Background,
  StyledH1,
  StyledButton,
  StyledInput,
  ErrorMessage,
  CenterText
} from "./style";
import { Link } from "react-router-dom";

const SignInForm = ({ msg, setPW, setUsername, onSubmit, onHeaderClick }) => {
  return (
    <StyledContainer>
      <Background />
      <StyledForm>
        <StyledH1 onClick={onHeaderClick}>NYT Search </StyledH1>
        <StyledInput
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPW(e.target.value)}
        />
        <ErrorMessage>{msg}</ErrorMessage>
        <StyledButton onClick={onSubmit}>Log In</StyledButton>
        <Link to="/sign_up">
          <CenterText>Sign Up</CenterText>
        </Link>
      </StyledForm>
    </StyledContainer>
  );
};

const SignUpForm = ({
  msg,
  setPW,
  setPW2,
  setUsername,
  setEmail,
  onSubmit,
  onHeaderClick
}) => {
  return (
    <StyledContainer>
      <Background />
      <StyledForm>
        <StyledH1 onClick={onHeaderClick}>NYT Search </StyledH1>
        <StyledInput
          type="text"
          name="username"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <StyledInput
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={e => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => setPW(e.target.value)}
        />
        <StyledInput
          type="password"
          name="password2"
          placeholder="Confirm Password"
          onChange={e => setPW2(e.target.value)}
        />
        <ErrorMessage>{msg}</ErrorMessage>
        <StyledButton onClick={onSubmit}>Sign Up</StyledButton>
        <Link to="/sign_in">
          <CenterText>Sign In</CenterText>
        </Link>
      </StyledForm>
    </StyledContainer>
  );
};

export { SignInForm, SignUpForm };
