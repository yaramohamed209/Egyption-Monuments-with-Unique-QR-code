//import data from "../data.js";
//import {Link} from 'react-router-dom';
import {useEffect,useReducer, useState} from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer =(state, action)=> {
    switch(action.type){
      case 'FETCH_REQUEST':
        return{...state, loading:true};
      case 'FETCH_SUCESS':
        return{...state, monuments: action.payload, loading:false};
      case 'FETCH_FAIL':
        return{...state, loading:false, error:action.payload};
      default:
        return state;     
    }
  };

function HomeScreen ()
{ 
    const[{loading, error, monuments}, dispatch]=useReducer(logger(reducer), {
        monuments:[],
        loading: true,
        error:'',
      });
        //const [Monuments, setMonuments]=useState([]);
      useEffect(()=>{
        const fetchData=async ()=> {
          dispatch({type: 'FETCH_REQUEST'});
          try {
            const result=await axios.get('/api/Monuments');
            dispatch({type:'FETCH_SUCESS',payload:result.data});
          } catch(err){
            dispatch({type:'FETCH_FAIL',payload:err.message});
          }
          //setMonuments(result.data);
        };
        fetchData();
      }, []);
    return (
        <div>
        <center>
       <h1>EGYPTIAN Civilization</h1> 
       <div className="monuments">
         

       </div>
       </center> 
     
       <img src="./images/header-img.jpg" className="image-header" /> 
    
       <div className= "images ">  
            <div  className= "image ">
               <img src="./images/t4.jpg"  className= "egypt-image "/> 
                 <div className= "image-text ">  
                    <p>
                     <strong>
                            Tample of isis at philae 
                        </strong>
                    </p>
        
                </div>
            </div>
            <div  className= "image ">
               <img src="./images/t2.jpg"  className= "egypt-image "/> 
                 <div className= "image-text ">  
                    <p>
                    <strong>
                            The tomp of queen Nefertary the wife of ramses - Luxer - Egypt 
                        </strong>

                    </p>
        
                </div>
            </div>
            <div  className= "image ">
               <img src="./images/t3.jpg"  className= "egypt-image "/> 
                 <div className= "image-text ">  
                    <p>
                    <strong>
                            Karnak Tample  
                        </strong>

                    </p>
        
                </div>
            </div>
            <div  className= "image ">
               <img src="./images/t6.jpg"  className= "egypt-image "/> 
                 <div className= "image-text ">  
                    <p>
                    <strong>
                            King Amenhotep  
                        </strong>

                    </p>
        
                </div>
            </div>

            
    </div>
       </div>
)} 
export default HomeScreen;  