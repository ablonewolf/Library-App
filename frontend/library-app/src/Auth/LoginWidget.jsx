import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../utils/SpinnerLoading";
import { Redirect } from "react-router-dom";
import { OktaSignInWidget } from "./OktaSignInWidget";

export const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const onSuccess = (tokens) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.log(err);
  };

  if (!authState) {
    return <SpinnerLoading />;
  }
  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};
