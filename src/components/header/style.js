import styled from "styled-components";
import SearchBar from "../searchBar";

export const SearchHeaderGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 1fr 30px;
  grid-template-areas: ". header avatar" "searchbar searchbar searchbar";
  padding: 20px 0;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 95vw;
    grid-template-columns: 150px 1fr 30px;
    grid-template-rows: auto;
    grid-template-areas: "header searchbar avatar";
    padding: 5px 20px;
    min-width: 500px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 25px;
  text-align: center;
  grid-area: header;
`;

export const Avatar = styled.div`
  background-image: url(${(props) => props.avatarImg});
  background-size: cover;
  width: 25px;
  height: 25px;
  align-self: center;
  border-radius: 50%;
  border: 2px solid #dcd9d9;
  cursor: pointer;
  grid-area: avatar;
`;

export const StyledSearchbar = styled(SearchBar)`
  grid-area: searchbar;
  justify-self: center;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    justify-self: flex-start;
  }
`;

export const PageHeaderGrid = styled.div`
  display: flex;
  margin: 10px 25px;
  justify-content: space-between;
  position: relative;
`;
