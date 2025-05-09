import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
        Take a visual tour of Gaura's Bistro — from cozy interiors to mouth-watering dishes, every photo tells a story of flavor and ambiance
        </p>
        <a href="https://www.instagram.com/gourasbistro/" target="_blank" rel="noopener noreferrer">
  <button type="button" className="custom__button">
    View More
  </button>
</a>

      </div>

      <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
  {galleryImages.map((image, index) => (
    <a
      href="https://www.instagram.com/gourasbistro/" 
      target="_blank"
      rel="noopener noreferrer"
      key={`gallery_image-${index + 1}`}
      className="app__gallery-images_card flex__center"
    >
      <img src={image} alt="gallery" />
      <BsInstagram className="gallery__image-icon" />
    </a>
  ))}
</div>


        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("Right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
