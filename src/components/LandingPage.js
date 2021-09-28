/* eslint-disable */
import React from "react";
import logo from "../images/spotify-logo.png";
import contentImage from "../images/content-image.png";
import { loginUrl } from "./SpotifyAPI";

const LandingPage = () => {
  return (
    <div className="login-page">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="active-links">
          <a href="#">Premium</a>
          <a href="#">Support</a>
          <a href="#">Download</a>
        </div>
        <div className="other-links">
          <a href="#">Sign up</a>
          <a href={loginUrl}>Login</a>
        </div>
      </nav>
      <div className="first-section section">
        <div className="content">
          <h3>Spotify premium</h3>
          <h1>Get 3 months of Premium for free</h1>
          <p>
            Enjoy ad-free music, offline listening, and more. Cancel anytime.
          </p>
          <button>get 3 months free</button>
        </div>
        <div className="content-image">
          <img src={contentImage} alt="img" />
        </div>
      </div>
      <div className="second-section section">
        <div className="content">
          <h3>Spotify free</h3>
          <h1>Listening is free</h1>
          <p>Millions of songs and podcasts. No credit card needed.</p>
          <button>Get spotify free</button>
        </div>
      </div>
      <footer>
        <div className="footer footer-main">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-links">
            <div className="company-links">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    For the Record
                  </a>
                </li>
              </ul>
            </div>
            <div className="communities-links">
              <h3>Communities</h3>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    For Artists
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Advertising
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
            <div className="useful-links">
              <h3>Useful links</h3>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Support
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Web Player
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Free Mobile App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-media-icons">
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-facebook"></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
