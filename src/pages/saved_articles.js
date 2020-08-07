import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { PageHeader } from "../components/header";
import { StyledHr } from "../components/common/Hr";
import { BodyContainer } from "../components/common/Containers";
import { ArticleCard } from "../components/card";
import { serverURL } from "../utils/constant";
import { ReactComponent as Minus } from "../assests/minus.svg";

const SavedArticlePage = () => {
  const isAuth = JSON.parse(localStorage.getItem("jwt-auth"));
  const [articles, setArticles] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const onMinusClick = (articleId, userId) => {
    axios
      .delete(`${serverURL}/${userId}/article`, {
        headers: { "x-access-token": isAuth.jwt_token },
        params: { id: userId, articleId }
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        history.push(location.pathname);
      });
  };

  const mapArticles = () => {
    return articles.map((article) => {
      if (typeof article !== "object") return "";

      const { web_url, headline, snippet, author, date, popup, _id } = article;
      return (
        <ArticleCard
          snippet={snippet}
          headline={headline}
          author={author}
          date={date}
          popup={popup}
          web_url={web_url}
          key={_id}
          onClick={() => onMinusClick(_id, isAuth.id)}
        >
          <Minus />
        </ArticleCard>
      );
    });
  };

  useEffect(() => {
    axios
      .get(`${serverURL}/${isAuth.id}/articles`, {
        headers: { "x-access-token": isAuth.jwt_token },
        params: { id: isAuth.id }
      })
      .then((res) => {
        setArticles([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setArticles, isAuth.id, isAuth.jwt_token]);

  return (
    <div>
      <PageHeader header={"Saved Articles"} isAuth={isAuth} />
      <StyledHr />
      <BodyContainer>{mapArticles()}</BodyContainer>
    </div>
  );
};

export default SavedArticlePage;
