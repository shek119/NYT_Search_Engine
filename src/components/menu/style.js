import styled from "styled-components";

// add animation to the collapse menu

const StyledUl = styled.ul`
  background-color: #4a4949;
  padding: 20px;
  position: absolute;
  right: 1%;
  bottom: 0%;
  transform: translateY(120%);
  display: none;
`;

const StyledLi = styled.li`
  list-style: none;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledHr = styled.hr`
  border: 1px solid #a9a4a4;
  width: 100%;
`;

export { StyledLi, StyledUl, StyledHr };
