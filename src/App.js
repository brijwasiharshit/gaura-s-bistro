import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,

  Header,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import Testimonials from "./container/Testimonials/Testimonials";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Gallery />
    <Testimonials />
    <FindUs />
    <Footer />
  </div>
);

export default App;
