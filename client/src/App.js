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
        <Navbar bg="dark" variant="dark">
          <Container>
          <LinkContainer to="/">
          <Navbar.Brand>Egyptian Monuments</Navbar.Brand>
          </LinkContainer>
          </Container>
          </Navbar>
        <center><strong>Egyptian Monuments With Unique QR Code</strong></center>
       
      
      </header>
      
      <main> 
      <Container>
        <Routes> 
          <Route path = "/" element={<HomeScreen />}/>
          <Route path = "/monuments/:slag" element={<monumentsScreen />}/>
        </Routes>
      </Container>
      </main>
      <footer>
        <div className="text-center"> 
          All rights reserved
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
