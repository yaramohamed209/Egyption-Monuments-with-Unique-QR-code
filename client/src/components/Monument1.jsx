import React from "react";
import data from "../data.js";
import { useSpeechSynthesis } from 'react-speech-kit';

function Monument1() {
  const { speak } = useSpeechSynthesis();
  const [value] = React.useState('');
  return (
    <div>
      <div className="events">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Monumentss</h1>
              <div>
                {data.Monuments[1].description}
              </div> 
              <button onClick={() => speak({ text:data.Monuments[1].description })}>Speak</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default Monument1;
