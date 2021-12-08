import React from "react";

import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import "./Home.css";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
