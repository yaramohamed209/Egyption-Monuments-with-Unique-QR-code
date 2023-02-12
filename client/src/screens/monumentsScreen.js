import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';



 const reducer =(state, action)=> {
    switch(action.type){
      case 'FETCH_REQUEST':
        return{...state, loading:true};
      case 'FETCH_SUCESS':
        return{...state, monument: action.payload, loading:false};
      case 'FETCH_FAIL':
        return{...state, loading:false, error:action.payload};
      default:
        return state;     
    }
    
  };
  
function monumentsScreen()
 {
    const params= useParams();
    const {slug} = params;

    const[{loading, error, monument}, dispatch]=useReducer(reducer, {
        monument:[],
        loading: true,
        error:'',
      });
      
      useEffect(()=>{
        const fetchData=async ()=> {
          dispatch({type: 'FETCH_REQUEST'});
          try {
            const result=await axios.get(`/api/Monuments/slug/${slug}`);
            dispatch({type:'FETCH_SUCESS',payload:result.data});
          } catch(err){
            dispatch({type:'FETCH_FAIL',payload:err.message});
          }
        };
        fetchData();
      }, [slug]);
  
 

  return (
    <Row>
        <Col md={6}>
            <img 
            className="img-large"
            src={monument.image}
            alt={monument.name}>
            </img>
        </Col>
        <Col md={3}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h1>{monument.name}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                    Description:
                    <p>{monument.description}</p>
                </ListGroup.Item>

            </ListGroup>
        </Col>
        
    </Row>
         );
  
}

export default monumentsScreen;