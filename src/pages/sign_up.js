import React, { useState } from "react";
import axios from "axios";
import { SignUpForm } from "../components/form";
import { serverURL } from "../utils/constant";
import { useHistory } from "react-router-dom";
import { onHeaderClick } from "../utils/utils";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [pw, setPW] = useState("");
  const [pw2, setPW2] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    if (pw !== pw2) setMsg("Passwords do not match");

    axios
      .post(`${serverURL}/auth/sign_up`, {
        username,
        email,
        password: pw
      })
      .then(res => {
        console.log(res);
        if (res.status === 200) history.push("/sign_in");
      })
      .catch(function(error) {
        // setMsg(error);
        if (error.response) {
          // Request made and server responded
          setMsg(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  return (
    <div>
      <SignUpForm
        setUsername={setUsername}
        setPW={setPW}
        setPW2={setPW2}
        onSubmit={onSubmit}
        msg={msg}
        setEmail={setEmail}
        onHeaderClick={() => onHeaderClick(history)}
      />
    </div>
  );
};

export default SignUp;
