import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function Monuments() {
  const { speak } = useSpeechSynthesis();
  const [value, setValue] = React.useState('');
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
              <h1 class="font-weight-light">Monuments</h1>
              <textarea
                rows={5}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></textarea>
              <button onClick={() => speak({ text: value })}>Speak</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monuments;
