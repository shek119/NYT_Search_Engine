import React, { useState } from "react";
import {
  TextInput,
  Container,
  StyledCross,
  Separator,
  StyledSearch
} from "./style";
import { connect } from "react-redux";
import { SEARCH_ARTICLES } from "../../redux/actions";
import { NYTSearch } from "../../utils/utils";

const SearchBar = ({ searchArticles }) => {
  const [queries, setQueries] = useState("");

  const onInputChange = e => {
    e.persist();
    setQueries(e.target.value);
  };

  const search = async event => {
    if (event.charCode && event.charCode !== 13) return;

    const q = queries.split(" ");
    const res = await NYTSearch(q, 1);

    searchArticles({ data: res.data, q });
  };

  return (
    <Container>
      <TextInput
        type="text"
        onChange={onInputChange}
        value={queries}
        onKeyPress={search}
      />
      <StyledCross onClick={() => setQueries("")} />
      <Separator />
      <StyledSearch onClick={search} />
    </Container>
  );
};

const mapDispatch = dispatch => {
  return {
    searchArticles: payload => dispatch({ type: SEARCH_ARTICLES, payload })
  };
};

export default connect(
  null,
  mapDispatch
)(SearchBar);
