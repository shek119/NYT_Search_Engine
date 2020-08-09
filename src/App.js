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
import SavedArticlePage from "./pages/saved_articles";
import LogOutPage from "./pages/log_out";

function ProtectedRoute({ path, children }) {
  const isAuth = localStorage.getItem("jwt-auth");

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
        <ProtectedRoute path="/:id/saves-articles" exact>
          <SavedArticlePage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/log_out">
          <LogOutPage />
        </ProtectedRoute>
        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
