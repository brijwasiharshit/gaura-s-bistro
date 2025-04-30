import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
        9H83+FC3, Nishola, Kutani, Bhimtal, Mahargaon, Uttarakhand 263136
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">9:00 am - 9:00 pm</p>
       
      </div>
      <a
  href="https://www.google.com/maps/dir//9H83%2BFC3,+Nishola,+Kutani,+Bhimtal,+Mahargaon,+Uttarakhand+263136/@29.3657398,79.4698642,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39a099df1a9da72f:0xe0fc936926b73608!2m2!1d79.5522656!2d29.3657651?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" // Replace with your link
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    type="button"
    className="custom__button"
    style={{ marginTop: "2rem" }}
  >
    Visit Us
  </button>
</a>

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
