import data from "./data"; 
import {BrowserRouter ,Routes ,Route ,Link  } from 'react-router-dom'; 
import HomeScreen from './screens/HomeScreen';
//import monumentsScreen from './sreens/monumentsScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';



function App() {
  return (
    <BrowserRouter>
    
    <div>
      <header> 
        <center><strong>Egyptian Monuments With Unique QR Code</strong></center>
       
      
      </header>
      
      <main> 
        <Routes> 
          <Route path = "/" element={<HomeScreen />}/>
          <Route path = "/monuments/:slag" element={<monumentsScreen />}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
