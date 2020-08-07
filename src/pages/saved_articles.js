import React, { useEffect, useRef } from "react";
import axios from "axios";
import { PageHeader } from "../components/header";
import { StyledHr } from "../components/common/Hr";
import { BodyContainer } from "../components/common/Containers";
import { ArticleCard } from "../components/card";
import { serverURL } from "../utils/utils";

const SavedArticlePage = () => {
  const isAuth = JSON.parse(localStorage.getItem("jwt-auth"));
  const articlesRef = useRef([]);

  useEffect(() => {
    axios
      .get(`${serverURL}/${isAuth.id}/articles`, {
        headers: { "x-access-token": isAuth.jwt_token }
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [articlesRef, isAuth.id, isAuth.jwt_token]);

  return (
    <div>
      <PageHeader header={"Saved Articles"} isAuth={isAuth} />
      <StyledHr />
      <BodyContainer></BodyContainer>
    </div>
  );
};

export default SavedArticlePage;
