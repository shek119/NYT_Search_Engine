import axios from "axios";
import { serverURL } from "./constant";

const NYTSearch = async (q, page = 1) => {
  const res = await axios.get(`${serverURL}/search/articles`, {
    params: {
      q,
      page
    }
  });

  return res;
};

function onHeaderClick(history) {
  history.push("/");
}

export { NYTSearch, onHeaderClick };
