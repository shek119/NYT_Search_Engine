import React, { useEffect } from "react";
import { PageHeader } from "../components/header";
import { StyledHr } from "../components/common/Hr";
import { BodyContainer } from "../components/common/Containers";
import { ArticleCard } from "../components/card";

const SavedArticlePage = () => {
  const isAuth = localStorage.getItem("jwt-auth");

  return (
    <div>
      <PageHeader header={"Saved Articles"} isAuth={isAuth} />
      <StyledHr />
      <BodyContainer></BodyContainer>
    </div>
  );
};

export default SavedArticlePage;
