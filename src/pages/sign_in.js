import React, { useState } from "react";
import { SignInForm } from "../components/form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { onHeaderClick } from "../utils/utils";

import { serverURL } from "../utils/constant";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [pw, setPW] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${serverURL}/auth/sign_in`, {
        username,
        password: pw
      })
      .then((res) => {
        const jwt_auth = {
          jwt_token: res.data.accessToke,
          id: res.data._id
        };
        localStorage.setItem("jwt-auth", JSON.stringify(jwt_auth));
        history.push("/");
      })
      .catch((err) => {
        // setMsg(error);
        if (err.response) {
          // Request made and server responded
          setMsg(err.response.data.message);
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);
        }
      });
  };

  return (
    <div>
      <SignInForm
        setUsername={setUsername}
        setPW={setPW}
        msg={msg}
        onSubmit={onSubmit}
        onHeaderClick={() => onHeaderClick(history)}
      />
    </div>
  );
};

export default SignIn;
