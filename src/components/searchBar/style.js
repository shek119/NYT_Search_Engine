import styled from "styled-components";
import { ReactComponent as Cross } from "../../assests/close.svg";
import { ReactComponent as Search } from "../../assests/search.svg";

export const TextInput = styled.input`
  width: 90%;
  font-size: 15px;
  padding: 0 10px;
  outline: none;
  border: none;
  border-radius: 20px;
`;

export const Container = styled.div`
  margin: auto;
  width: 90%;
  border: 1px solid #dfe1e5;
  border-radius: 20px;
  display: flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 0 10px;

  &:hover {
    -webkit-box-shadow: -1px 2px 13px 3px rgba(176, 176, 176, 0.68);
    -moz-box-shadow: -1px 2px 13px 3px rgba(176, 176, 176, 0.68);
    box-shadow: -1px 2px 13px 3px rgba(176, 176, 176, 0.68);
  }
`;

export const StyledCross = styled(Cross)`
  width: auto;
  height: 60%;
  fill: #80868b;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledSearch = styled(Search)`
  width: auto;
  height: 60%;
  fill: #80868b;

  &:hover {
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  width: 0px;
  height: 70%;
  border-left: 2px solid #80868b;
  margin: 0 10px;
`;
