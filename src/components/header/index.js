import React from "react";
import faker from "faker";
import {
  SearchHeaderGrid,
  StyledH1,
  Avatar,
  PageHeaderGrid,
  StyledSearchbar
} from "./style";
import { StyledHr } from "../common/Hr";
import { useHistory } from "react-router-dom";

export const SearchHeader = ({ isAuth }) => {
  const history = useHistory();
  const avatarImg = isAuth ? faker.image.avatar() : "/user-silhouette.svg";

  const onAvatarClick = (e) => {
    e.preventDefault();
    history.push("/sign_in");
  };

  return (
    <div>
      <SearchHeaderGrid>
        <StyledH1>NYT Search</StyledH1>
        <StyledSearchbar />
        <Avatar avatarImg={avatarImg} onClick={onAvatarClick} />
      </SearchHeaderGrid>
      <StyledHr />
    </div>
  );
};

export const PageHeader = ({ header, isAuth }) => {
  const history = useHistory();
  const avatarImg = isAuth ? faker.image.avatar() : "/user-silhouette.svg";

  const onAvatarClick = (e) => {
    e.preventDefault();
    history.push("/sign_in");
  };

  return (
    <PageHeaderGrid>
      <StyledH1>{header}</StyledH1>
      <Avatar avatarImg={avatarImg} onClick={onAvatarClick} />
    </PageHeaderGrid>
  );
};
