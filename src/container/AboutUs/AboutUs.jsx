import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            At Gaura's Bistro, we blend local charm with global flavors in a
            cozy, hilltop setting.
          </p>
         
        </div>

        <div
          className="app__aboutus-content_knife flex__center"
          style={{ display: isMobile ? "none" : "flex" }}
        >
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Gaura's Bistro began as a small dream brewed in the heart of
            Bhimtal. Inspired by the serene lake, mountain air, and a love for
            good food, we opened our doors to create a space where locals and
            travelers could gather, relax, and share stories over a warm meal.
          </p>
      
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
