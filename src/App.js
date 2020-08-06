import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SearchPage from "./pages/search";
import SignInPage from "./pages/sign_in";
import SignUpPage from "./pages/sign_up";

function ProtectRoute({ path, children }) {
  const isAuth = localStorage.getItem("jwt_auth");

  return (
    <Route path={path} exact>
      {isAuth ? children : <Redirect to="/sign_in" />}
    </Route>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign_in" exact>
          <SignInPage />
        </Route>
        <Route path="/sign_up" exact>
          <SignUpPage />
        </Route>
        {/* <ProtectedRoute path exact /> */}
        <Route path="/" exact>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
