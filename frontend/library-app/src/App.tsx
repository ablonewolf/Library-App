import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarFooter/Navbar";
import { Footer } from "./layouts/NavbarFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { BookCheckoutPage } from "./layouts/BookCheckout/BookCheckoutPage";
import { oktaConfig } from "./config/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import { LoginWidget } from "./Auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const history = useHistory();
  const customAuthHandler = () => {
    history.push("/login");
  };

  const restoreOriginalUrl = async (_oktaAuth: any, originalUrl: any) => {
    history.replace(toRelativeUrl(originalUrl || "/", window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUrl}
      onAuthRequired={customAuthHandler}
    >
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchBooksPage />
            </Route>
            <Route path="/checkout/:bookId">
              <BookCheckoutPage />
            </Route>
            <Route
              path="/login"
              render={() => <LoginWidget config={oktaConfig} />}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Security>
  );
};
