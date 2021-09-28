/* eslint-disable */
import React from "react";
import logo from "../images/spotify-logo.png";
import { useState, useEffect } from "react";
import { fetchNewReleases } from "./categories/NewReleases";
import { displayNewReleases } from "./categories/NewReleases";
import { playMusic } from "./player";

const MainSection = (props) => {
  const [newReleases, setNewReleases] = useState();
  const token = props.token;
  useEffect(() => {
    fetchNewReleases(token, setNewReleases);
  }, [token]);

  if (newReleases !== undefined) {
    return (
      <div className="main-section">
        <div className="left-navig-section">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="btn home-button">
            <a href="#">
              <i class="fa fa-home fa-fw"></i> Home
            </a>
          </div>
          <div className="btn search-button">
            <a href="#">
              <i class="fa fa-search fa-fw"></i> Search
            </a>
          </div>
          <div className="btn lib-button">
            <a href="#">
              <i class="fa fa-bars fa-fw"></i> Your library
            </a>
          </div>
        </div>
        <div className="right-main-section">
          <nav className="navig-bar">
            <div className="navig-arrows">
              <i class="fa fa-chevron-left"></i>
              <i class="fa fa-chevron-right"></i>
            </div>
            <div className="upgrade-btn">
              <button>
                <a href="#">Upgrade</a>
              </button>
            </div>
          </nav>
          <div className="recommendation-section">
            <h1>New Releases</h1>
            {displayNewReleases(newReleases)}
          </div>
        </div>
        <div className="player">
          <div className="data">
            <img src={newReleases[0].images[0].url} alt="img" />
            <p>{newReleases[0].name}</p>
          </div>
          <div className="player-controls">
            <div className="control-btns">
              <button>
                <i class="fa fa-chevron-left"></i>
              </button>
              <button
                onClick={() => {
                  playMusic(token, newReleases);
                }}
              >
                <i class="fa fa-play"></i>
              </button>
              <button>
                <i class="fa fa-chevron-right"></i>
              </button>
            </div>
            <div className="time-slider">
              <input type="range" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error Fetching API</h1>
      </div>
    );
  }
};

export default MainSection;
