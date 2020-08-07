import React, { useRef, useState } from "react";
import faker from "faker";
import {
  SearchHeaderGrid,
  StyledH1,
  Avatar,
  PageHeaderGrid,
  StyledSearchbar
} from "./style";
import Menu from "../menu";
import { StyledHr } from "../common/Hr";
import { useHistory } from "react-router-dom";
import { onAvatarClick } from "../../utils/utils";

export const SearchHeader = ({ isAuth }) => {
  const history = useHistory();
  const avatarImg = isAuth ? faker.image.avatar() : "/user-silhouette.svg";
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SearchHeaderGrid>
        <StyledH1>NYT Search</StyledH1>
        <StyledSearchbar />
        <Avatar
          avatarImg={avatarImg}
          onClick={() =>
            onAvatarClick(history, isAuth, menuRef, isOpen, setIsOpen)
          }
        />
        <Menu ref={menuRef} />
      </SearchHeaderGrid>
      <StyledHr />
    </div>
  );
};

export const PageHeader = ({ header, isAuth }) => {
  const history = useHistory();
  const avatarImg = isAuth ? faker.image.avatar() : "/user-silhouette.svg";
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageHeaderGrid>
      <StyledH1>{header}</StyledH1>
      <Avatar
        avatarImg={avatarImg}
        onClick={() =>
          onAvatarClick(history, isAuth, menuRef, isOpen, setIsOpen)
        }
      />
      <Menu ref={menuRef} />
    </PageHeaderGrid>
  );
};
