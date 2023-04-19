import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Landing from "./components/pages/landing";
import UserProfile from "./components/UserProfile";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [screen, setScreen] = useState("home");

const navigateTo = (screenName) => {
  setScreen(screenName);
};
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
    {screen === "home" && <Landing navigateTo={navigateTo} />}
    {screen === "login" && <UserProfile user = {{username: "amanzhan"}}/>}
    </>
    
  );
};

export default App;
