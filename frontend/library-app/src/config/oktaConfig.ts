export const oktaConfig = {
  clientId: "0oab6oxez6U43xqMq5d7",
  issuer: "https://dev-34273426.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
