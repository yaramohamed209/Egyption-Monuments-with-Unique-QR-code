import "./App.css";
import Blog from './screen/Blog'
import Navigation from "./components/navigation";
import Secondnav from "./components/secondnav";
import Foot from "./components/foot";
import Destination from "./screen/Destination";
import {  useEffect, useState } from 'react';
import data from "./data.js";
import axios from "axios"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
    
    return ( 
    <BrowserRouter>
    
    <div className = "App" >
        <Navigation/>

        <main>
        <h1> yara </h1>
        {data.Monuments.map((Monuments)=>(
            <div>
                <img src={Monuments.image} alt={Monuments.name}/>
            <p>{Monuments.name}</p>
            <p>{Monuments.price}</p>
            </div>
        ))
        }
        
        </main>
        <Secondnav/>
        <Blog />
        <Destination />
        <Foot />

        </div>
        </BrowserRouter>
    );

}


export default App;