import data from "../data.js";
function HomeScreen ()
{ 
    
    //here data for main page 
    return (
    <div>
       <center>
         <h1>EGYPTIAN Civilization</h1> 
       </center> 
       <img src="./images/header-img.jpg" className="image-header"  />  
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