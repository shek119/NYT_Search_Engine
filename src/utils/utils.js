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

const onAvatarClick = (history, isAuth, menuRef, isOpen, setIsOpen) => {
  // e.preventDefault();
  if (!isAuth) history.push("/sign_in");
  console.log(isOpen);
  //open menu
  if (!isOpen) {
    menuRef.current.style.display = "block";
    // menuRef.current.style.maxHeight = "100%";
    setIsOpen(!isOpen);
  } else {
    // menuRef.current.style.maxHeight = "0%";
    menuRef.current.style.display = "none";
    setIsOpen(!isOpen);
  }
};

export { NYTSearch, onHeaderClick, onAvatarClick };
