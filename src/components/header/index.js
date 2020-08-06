import React from "react";
import faker from "faker";
import { Grid, StyledH1, StyledHr, Avatar } from "./style";
import SearchBar from "../searchBar";
import { useHistory } from "react-router-dom";

const SearchHeader = ({ isAuth }) => {
  const history = useHistory();
  const avatarImg = isAuth ? faker.image.avatar() : "user-silhouette.svg";

  const onAvatarClick = e => {
    e.preventDefault();
    history.push("/sign_in");
  };

  return (
    <div>
      <Grid>
        <StyledH1>NYT Search</StyledH1>
        <SearchBar />
        <Avatar avatarImg={avatarImg} onClick={onAvatarClick} />
      </Grid>
      <StyledHr />
    </div>
  );
};

export { SearchHeader };
