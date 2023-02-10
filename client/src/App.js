import data from "./data"; 
import {BrowserRouter ,Routes ,Route  } from 'react-router-dom' 
import HomeScreen from './screens/HomeScreen'



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
