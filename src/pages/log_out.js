import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const LogOutPage = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("jwt-auth");
    history.push("/");
  });

  return <div />;
};

export default LogOutPage;
