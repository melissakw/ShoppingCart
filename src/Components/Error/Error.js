import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { GoHomeButton, HighlightText, BodyText } from "./Error.elements";
import { AppContainer } from "../App.elements";

const Error = () => {
  return (
    <AppContainer>
      <HighlightText>Oops... </HighlightText>
      <BodyText>The page you were looking for was not found.</BodyText>

      <Link to="/" data-testid="go-home-link">
        <GoHomeButton >Go back</GoHomeButton>
      </Link>
    </AppContainer>
  );
};

export default Error;
