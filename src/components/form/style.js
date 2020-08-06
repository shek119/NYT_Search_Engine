import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -111;
  background: rgb(234, 240, 242);
  background: linear-gradient(
    31deg,
    rgba(234, 240, 242, 1) 30%,
    rgba(237, 239, 240, 1) 44%,
    rgba(207, 216, 220, 1) 52%
  );
  filter: blur(8px);
  -webkit-filter: blur(8px);
`;

const StyledForm = styled.form`
  border-radius: 15px;
  background-color: #ffffff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  text-align: center;
  cursor: pointer;
`;

const StyledDiv = styled.div``;

const StyledButton = styled.button`
  outline: none;
  margin: 20px 40px;
  padding: 10px 20px;
  border: none;
  background: #b8bac3;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #f7f7f7;
  border-radius: 15px;
  margin-top: 20px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const CenterText = styled.div`
  text-align: center;
`;

export {
  StyledContainer,
  StyledForm,
  Background,
  StyledH1,
  StyledDiv,
  StyledButton,
  StyledInput,
  ErrorMessage,
  CenterText
};
