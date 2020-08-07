import React from "react";
import {
  RowContainer,
  ImgDiv,
  StyledH5,
  LoadingH5,
  LoadingImgDiv,
  AnimatedDiv,
  PlusDiv,
  ContentDiv
} from "./style";
import { StyledATag } from "../common/ATag";
import { ReactComponent as Plus } from "../../assests/plus.svg";

const ArticleCard = ({
  web_url,
  headline,
  snippet,
  author,
  date,
  popup,
  saveArticle
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
      {/* <Plus svg={"/plus.svg"} /> */}
      <PlusDiv onClick={saveArticle}>
        <Plus />
      </PlusDiv>
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
