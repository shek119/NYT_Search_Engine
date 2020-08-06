import React from "react";
import { SearchHeader } from "../components/header";
import { ArticleCard, LoadingArticleCard } from "../components/card";
import { BodyContainer } from "../components/common/Containers";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { NYTSearch } from "../utils/utils";
import { SCROLL_SEARCH } from "../redux/actions";

function MainPage({ searchResults, scrollSearch, q, page }) {
  const isAuth = localStorage.getItem("jwt-auth");

  const fetchData = async () => {
    const res = await NYTSearch(q, page);
    scrollSearch(res);
  };

  const mapResults = results => {
    return results.map(result => {
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
          next={fetchData}
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

const mapState = state => {
  const { search } = state;

  return { searchResults: search.data, page: search.page, q: search.q };
};

const mapDispatch = dispatch => {
  return {
    scrollSearch: payload => dispatch({ type: SCROLL_SEARCH, payload })
  };
};

export default connect(
  mapState,
  mapDispatch
)(MainPage);
