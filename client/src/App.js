import data from "./data";


function App() {
  return (
    <div>
      <header>
      <a href="/"> Egyptian Monuments With Unique QR Code
      </a>
      </header>
      
      <main> 
       <h1>Featured Monuments</h1>
       <div className="monuments">
         {data.monuments.map((monuments) =>(
        <div key={monuments.slug}>
          <img src={monuments.image} alt={monuments.name}/>

          <p> {monuments.name}</p>
          <p>{monuments.description}</p>
        </div>
        ))
         }
       </div>
      </main>
    </div>
  );
}

export default App;
