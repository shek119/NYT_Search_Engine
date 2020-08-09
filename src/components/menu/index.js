import React from "react";
import { StyledUl, StyledLi, StyledHr } from "./style";
import { StyledLink } from "../common/Link";

const Menu = React.forwardRef((props, ref) => {
  const isAuth = JSON.parse(localStorage.getItem("jwt-auth"));

  const links = [
    {
      text: "View Saved Articles",
      link: `/${isAuth ? isAuth.id : ""}/saves-articles`
    },
    { text: "Main Page", link: "/" },
    { text: "Log Out", link: "/log_out" }
  ];

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <>
          <StyledLi key={link.text}>
            <StyledLink color={"#a9a4a4"} to={link.link}>
              {link.text}
            </StyledLink>
          </StyledLi>
          {index !== links.length - 1 ? <StyledHr /> : <></>}
        </>
      );
    });
  };

  return (
    <StyledUl ref={ref} key="menu">
      {renderLinks()}
    </StyledUl>
  );
});

export default Menu;
