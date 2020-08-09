import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { PageHeader } from "../components/header";
import { StyledHr } from "../components/common/Hr";
import { BodyContainer } from "../components/common/Containers";
import { ArticleCard } from "../components/card";
import { serverURL } from "../utils/constant";
import { ReactComponent as Minus } from "../assests/minus.svg";
import { GET_SAVED_ATRICLES, DEL_SAVED_ARTICLE } from "../redux/actions";

const SavedArticlePage = ({
  getSavedArticles,
  delSavedArticles,
  savedArticles
}) => {
  const isAuth = JSON.parse(localStorage.getItem("jwt-auth"));

  const onMinusClick = (articleId, isAuth) => {
    axios
      .delete(`${serverURL}/${isAuth.id}/article`, {
        headers: { "x-access-token": isAuth.jwt_token },
        params: { id: isAuth.id, articleId }
      })
      .catch((err) => {
        console.log(err);
      });
    delSavedArticles(isAuth, articleId);
  };

  const mapArticles = () => {
    if (!savedArticles || savedArticles.length === 0) return;
    return savedArticles.map((article) => {
      if (typeof article !== "object") return "";

      const random = Math.random() * 10;
      const { web_url, headline, snippet, author, date, popup, _id } = article;
      return (
        <ArticleCard
          snippet={snippet}
          headline={headline}
          author={author}
          date={date}
          popup={popup}
          web_url={web_url}
          key={_id + String(random)}
          onClick={() => onMinusClick(_id, isAuth)}
        >
          <Minus />
        </ArticleCard>
      );
    });
  };

  useEffect(() => {
    if (savedArticles.length === 0)
      axios
        .get(`${serverURL}/${isAuth.id}/articles`, {
          headers: { "x-access-token": isAuth.jwt_token },
          params: { id: isAuth.id }
        })
        .then((res) => {
          getSavedArticles(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [isAuth, getSavedArticles, savedArticles]);

  return (
    <div>
      <PageHeader header={"Saved Articles"} isAuth={isAuth} />
      <StyledHr />
      <BodyContainer>{mapArticles()}</BodyContainer>
    </div>
  );
};

const mapDispatch = (dispatch) => {
  return {
    getSavedArticles: (data) => {
      dispatch({ type: GET_SAVED_ATRICLES, payload: data });
    },
    delSavedArticles: (isAuth, articleId) => {
      dispatch({ type: DEL_SAVED_ARTICLE, payload: articleId });
    }
  };
};

const mapState = (state, ownProps) => {
  return { savedArticles: state.user.savedArticles };
};

export default connect(mapState, mapDispatch)(SavedArticlePage);
