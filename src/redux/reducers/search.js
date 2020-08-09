import { SEARCH_ARTICLES, SCROLL_SEARCH } from "../actions";

const defaultState = { page: 1, data: [], q: [] };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_ARTICLES:
      return {
        ...state,
        data: action.payload.data,
        page: 2,
        q: action.payload.q
      };

    case SCROLL_SEARCH:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        page: state.page + 1
      };

    default:
      return state;
  }
};

export default reducer;
