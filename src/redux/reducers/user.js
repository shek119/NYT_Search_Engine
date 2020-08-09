import { GET_SAVED_ATRICLES, DEL_SAVED_ARTICLE } from "../actions";

const defaultState = { savedArticles: [] };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SAVED_ATRICLES:
      return { ...state, savedArticles: action.payload };

    case DEL_SAVED_ARTICLE:
      const newList = state.savedArticles.filter(
        (article) => article._id !== action.payload
      );

      return { ...state, savedArticles: [...newList] };

    default:
      return state;
  }
};

export default reducer;
