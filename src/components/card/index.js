import React from "react";
import {
  RowContainer,
  ImgDiv,
  StyledH5,
  LoadingH5,
  LoadingImgDiv,
  AnimatedDiv,
  SvgDiv,
  ContentDiv
} from "./style";
import { StyledATag } from "../common/ATag";

const ArticleCard = ({
  web_url,
  headline,
  snippet,
  author,
  date,
  popup,
  onClick,
  children
}) => {
  const regex = /\d{4}-\d{2}-\d{2}/;

  return (
    <RowContainer>
      <StyledATag href={web_url}>
        <ImgDiv src={popup ? `https://www.nytimes.com/${popup}` : "nyt.jpg"} />
      </StyledATag>
      <ContentDiv>
        <StyledH5>
          <StyledATag href={web_url}>{headline}</StyledATag>
        </StyledH5>
        <div>
          <span>{author}</span>
          &nbsp;&nbsp;
          <span>{date.match(regex)}</span>
        </div>
        <div>{snippet}</div>
      </ContentDiv>
      <SvgDiv onClick={onClick}>{children}</SvgDiv>
    </RowContainer>
  );
};

const LoadingArticleCard = () => {
  return (
    <RowContainer>
      <LoadingImgDiv />
      <div>
        <LoadingH5 />
        <AnimatedDiv />
        <AnimatedDiv />
      </div>
    </RowContainer>
  );
};

export { ArticleCard, LoadingArticleCard };
