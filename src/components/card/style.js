import styled, { keyframes } from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  max-width: 750px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const ImgDiv = styled.div`
  height: 80px;
  min-width: 80px;
  margin-right: 20px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  align-self: center;
`;

export const StyledH5 = styled.h5`
  margin: 0 0 10px;
  font-size: 17px;
`;

const bgAnimation = keyframes`
  0%{
    background-position: left
  }

  100%{
    background-position: right
  }
`;

export const LoadingH5 = styled(StyledH5)`
  width: 150px;
  height: 20px;
  background-image: linear-gradient(
    31deg,
    rgba(234, 240, 242, 1) 30%,
    rgba(237, 239, 240, 1) 44%,
    rgba(207, 216, 220, 1) 52%
  );
  background-size: 400%;
  animation: ${bgAnimation} 2s infinite alternate;
`;

export const LoadingImgDiv = styled(ImgDiv)`
  height: 80px;
  background-image: linear-gradient(
    31deg,
    rgba(234, 240, 242, 1) 30%,
    rgba(237, 239, 240, 1) 44%,
    rgba(207, 216, 220, 1) 52%
  );
  background-size: 400%;
  animation: ${bgAnimation} 2s infinite alternate;
`;

export const AnimatedDiv = styled.div`
  width: 150px;
  height: 20px;
  background-image: linear-gradient(
    31deg,
    rgba(234, 240, 242, 1) 30%,
    rgba(237, 239, 240, 1) 44%,
    rgba(207, 216, 220, 1) 52%
  );
  background-size: 400%;
  animation: ${bgAnimation} 2s infinite alternate;
`;

export const PlusDiv = styled.div`
  width: 1vw;
  min-width: 23px;
  align-self: center;
  margin-left: 5%;
  cursor: pointer;
`;

export const ContentDiv = styled.div`
  width: 75%;
`;
