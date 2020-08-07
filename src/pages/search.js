import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";

import { serverURL } from "../utils/constant";
import { SearchHeader } from "../components/header";
import { ArticleCard, LoadingArticleCard } from "../components/card";
import { BodyContainer } from "../components/common/Containers";
import { NYTSearch } from "../utils/utils";
import { SCROLL_SEARCH } from "../redux/actions";

function MainPage({ searchResults, scrollSearch, q, page }) {
  const isAuth = JSON.parse(localStorage.getItem("jwt-auth"));

  const searchArticles = async () => {
    const res = await NYTSearch(q, page);
    scrollSearch(res);
  };

  const saveArticle = (url, { id, jwt_token }) => {
    axios.post(`${serverURL}/${id}/article/save`, {
      header: {
        "x-access-token": jwt_token
      },
      id,
      url
    });
  };

  const mapResults = (results) => {
    return results.map((result) => {
      const { web_url, headline, snippet, author, date, popup } = result;
      return (
        <ArticleCard
          key={result._id}
          popup={popup}
          web_url={web_url}
          headline={headline}
          snippet={snippet}
          author={author}
          date={date}
          saveArticle={() => {
            saveArticle(web_url, isAuth);
          }}
        />
      );
    });
  };

  return (
    <div>
      <SearchHeader isAuth={isAuth} />
      <BodyContainer>
        <InfiniteScroll
          dataLength={searchResults.length} //This is important field to render the next data
          next={searchArticles}
          hasMore={true}
          loader={<LoadingArticleCard />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {mapResults(searchResults)}
        </InfiniteScroll>
      </BodyContainer>
    </div>
  );
}

const mapState = (state) => {
  const { search } = state;

  return { searchResults: search.data, page: search.page, q: search.q };
};

const mapDispatch = (dispatch) => {
  return {
    scrollSearch: (payload) => dispatch({ type: SCROLL_SEARCH, payload })
  };
};

export default connect(mapState, mapDispatch)(MainPage);
