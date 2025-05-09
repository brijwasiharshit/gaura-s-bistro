import React from "react";

import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Our Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
      
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}  
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        {/* <img src={images.menu} alt="menu img" /> */}
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
      
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
    <a href="https://68089e6d9705b6da86c71daa--incandescent-peony-7a99fa.netlify.app/" style={{ textDecoration: "none" }}>
  <button type="button" className="custom__button">
    View More
  </button>
</a>

    </div>
  </div>
);

export default SpecialMenu;
