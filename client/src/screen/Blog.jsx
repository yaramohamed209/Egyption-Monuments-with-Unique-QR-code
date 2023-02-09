import React from "react";
import {  useEffect, useState } from 'react';
//import data from "./data";
import axios from "axios"

const Blog = () => {
  const [Monuments, setMonuments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
     
       const result = await axios.get("/api/Monuments");
       setMonuments(result.data);
        
    };

    
    },[]);
  return (<>
  <h1>Egyption Monuments with Unique QR code</h1>
  </>);
};

export default Blog;
