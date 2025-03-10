import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Event from "./page/Event";

const Alroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/event" element={<Event />} />
      {/* <Route exact path="/Auth" element={<Auth />} /> */}
      {/* 
      <Route path = "/Users/:id" element={<UserProfile />} /> */}
    </Routes>
  );
};

export default Alroutes;
