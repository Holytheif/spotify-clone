import React from "react";
import LandingPage from "./LandingPage";
import "../styles/main.scss";
import { useState, useEffect } from "react";
import { getTokenFromUrl } from "./SpotifyAPI";
import MainSection from "./MainSection";

const accessToken = () => {
  const hash = getTokenFromUrl();
  window.location.hash = ""; // clearing access token for security purposes
  const tokenRecieved = hash.access_token;
  return tokenRecieved;
};

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const _token = accessToken();
    setToken(_token);
  }, []);

  return (
    <div className="app">
      {token ? <MainSection token={token} /> : <LandingPage />}
    </div>
  );
};

export default App;
