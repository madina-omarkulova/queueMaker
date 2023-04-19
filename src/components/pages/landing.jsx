import React, { useState, useEffect } from "react";
import { Navigation } from "../navigation";
import { Header } from "../header";
import { Features } from "../features";
import { About } from "../about";
import { Gallery } from "../gallery";
import { Team } from "../Team";
import { Contact } from "../contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
  
  const Landing = ({navigateTo}) => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} navigateTo={navigateTo}/>
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Gallery data={landingPageData.Gallery} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
  
    );
  };
  
  export default Landing;
  