import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Monuments,
  Monument1,
  Monument2,
  Monument3,
  Monument4,
  Monument6,
  Monument7,
  Monument5,
  Events,
  
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monuments" element={<Monuments />} />
      <Route path="/monument1" element={<Monument1 />} />
      <Route path="/monument2" element={<Monument2 />} />
      <Route path="/monument3" element={<Monument3 />} />
      <Route path="/monument4" element={<Monument4 />} />
      <Route path="/monument5" element={<Monument5 />} />
      <Route path="/monument6" element={<Monument6 />} />
      <Route path="/monument7" element={<Monument7 />} />
      <Route path="/events" element={<Events />} />  
    </Routes>
    <Footer />
  </Router>,


  document.getElementById('root')
);

