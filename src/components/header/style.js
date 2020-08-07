import styled from "styled-components";

export const SearchHeaderGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 90vw;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    width: 90vw;
    grid-template-columns: 150px 1fr 1fr;
    padding: 20px;
    min-width: 500px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 25px;
  text-align: center;
`;

export const StyledHr = styled.hr`
  border: none;
  border-bottom: 1px solid #ebebeb;
`;

export const Avatar = styled.div`
  background-image: url(${(props) => props.avatarImg});
  background-size: cover;
  width: 25px;
  height: 25px;
  justify-self: end;
  align-self: center;
  border-radius: 50%;
  border: 2px solid #dcd9d9;
  cursor: pointer;
`;

export const PageHeaderGrid = styled.div`
  display: grid;
  margin: 20px;
  justify-content: space-between;
`;
