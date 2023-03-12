import React from "react";
function Home()
 {
  React.useEffect(() => { 
    var addScript = document.createElement('script'); 
    addScript.setAttribute( 
      'src', 
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' 
    ); 
    document.body.appendChild(addScript); 
    window.googleTranslateElementInit = googleTranslateElementInit; 
  }, []); 
 
  const googleTranslateElementInit = () => { 
    new window.google.translate.TranslateElement( 
      { 
        pageLanguage: 'en', 
        // eslint-disable-next-line no-undef 
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, 
      }, 
      'google_translate_element' 
    ); 
  };

  return (
  
    <div className="home">
      <div id="google_translate_element"></div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-20"></div> 
          <center>
            <strong>
          <h2 >WELCOME TO EGYPT</h2>
          </strong>
          </center>
          
        <div class="slider-frame">
            <div class="slide-images">
                    <div class="img-container">
                        <img classname="slider" src="images/Highlights/national.jpg"alt=""width="370" height="auto"/>
                    </div>
                    <div class="img-container">
                        <img classname="slider" src="images/Highlights/cariomuseum.jpg"alt=""width="370" height="auto"/>
                    </div>
                    <div class="img-container">
                        <img classname="slider" src="images/Highlights/abdeenpalace.jpg"alt=""width="370" height="auto"/>
                    </div>   
            </div>
        </div>
        <center>
        <div class="wrapper">
          <div className="box1">
            <strong>
            <p>
             Egypt is full of dreams, mysteries<br></br>
                and memories.Go discover them !!
            </p>
            </strong>
          </div>
        </div>
        </center>       
        
          </div>
<center>
<div id="root"></div>
        <div class="wrapper">
        <div class="row ">
          <div class="column">
            <label class="textOverImage" >
              <input type="checkbox"/>
                 <img src="images/Highlights/Nile.jpg" className= "egypt "alt=""/> 
                   <h3>Egyptian Nile</h3>
            </label>
          </div>
         <div class="column">
           <label class="textOverImage" >
              <input type="checkbox"/>
                  <img src="images/Highlights/pyramids.jpg"  className= "egypt "alt=""/> 
                    <h3>Giza Pyramids</h3>
            </label>
          </div>
          <div class="column">
            <label class="textOverImage" >
              <input type="checkbox"/>
                <img src="images/Highlights/abusimbel.jpg"  className= "egypt"alt=""/> 
                    <h3>Abu Simbel Temples</h3>
            </label>
          </div>
          <div class="column">
            <label class="textOverImage" >
              <input type="checkbox"/>
                <img src="images/Highlights/islamic.jpg"  className= "egypt "alt=""/> 
                    <h3>Museum of Islamic Art</h3>
            </label>
          </div>
          </div>
          </div>

<div class="row ">
<div class="column">
<label class="textOverImage" >
  <input type="checkbox"/>
  <img src="images/Highlights/egyptianmuseum.jpg"  className= "egypt"alt=""/> 
  <h3>Egyptian Museum</h3>
</label>
</div>
<div class="column">
<label class="textOverImage" >
  <input type="checkbox"/>
  <img src="images/Highlights/saintcatren.jpg"  className= "egypt"alt=""/> 
  <h3>Saint Catherine Monastery </h3>
</label>
</div>
<div class="column">
<label class="textOverImage" >
  <input type="checkbox"/>
  <img src="images/Highlights/siwa.jpg"  className= "egypt"alt=""/> 
  <h3>Siwa Oasis</h3>
</label>
</div>
<div class="column">
<label class="textOverImage" >
  <input type="checkbox"/>
  <img src="images/Highlights/redsea.jpg"  className= "egypt"alt=""/> 
  <h3>The Red Sea</h3>
</label>
</div>
</div>
</center>
<div className= "images ">  
         <div  className= "image ">
            <img src="./images/t4.jpg"  className= "egypt-image "alt=""/> 
              <div className= "image-text ">  
                 <p>
                  <strong>
                         Tample of isis at philae 
                     </strong>
                 </p>
             </div>
         </div>
         <div  className= "image ">
            <img src="./images/t2.jpg"  className= "egypt-image "alt=""/> 
              <div className= "image-text ">  
                 <p>
                 <strong>
                         The tomp of queen Nefertary the wife of ramses - Luxer - Egypt 
                 </strong>
                 </p>
             </div>
         </div>
         <div  className= "image ">
            <img src="./images/t3.jpg"  className= "egypt-image "alt=""/> 
              <div className= "image-text ">  
                 <p>
                 <strong>
                         Karnak Tample  
                 </strong>
                 </p>
             </div>
         </div>
         <div  className= "image ">
            <img src="./images/t6.jpg"  className= "egypt-image "alt=""/> 
              <div className= "image-text ">  
                 <p>
                 <strong>
                         King Amenhotep  
                 </strong>
                 </p>
             </div>
         </div>
         <div  className= "image ">
            <img src="./images/t7.jpg"  className= "egypt-image " alt=""/> 
              <div className= "image-text ">  
                 <p>
                 <strong>
                     Abu Simble  
                 </strong>
                 </p>
             </div>
         </div>
         <div  className= "image ">
            <img src="./images/t8.jpg"  className= "egypt-image " alt=""/> 
              <div className= "image-text ">  
                 <p>
                 <strong>
                      Pyramids - Giza   
                 </strong>
                 </p>
             </div>
         </div>  
         <div  className= "image ">
            <img src="./images/t9.jpg"  className= "egypt-image "alt=""/> 
              <div className= "image-text ">  
                 <p>
                 <strong>
                    The Tample of Luxer 
                 </strong>
                 </p>
             </div>
         </div>          
     </div>
      </div>
      </div>
  
      
    
  );
}
export default Home;