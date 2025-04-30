import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
        </div>
        <p className="p__opensans">
          At Gaura's Bistro, we believe in simplicity, sincerity, and the joy of
          good company. We’re committed to serving fresh, honest food made with
          care — not just for the flavor, but for the people we serve.
        </p>
      </div>

      <div className="app__chef-sign">
        <p></p>
        <p className="p__opensans"> - Founder</p>
        
      </div>
    </div>
  </div>
);

export default Chef;
