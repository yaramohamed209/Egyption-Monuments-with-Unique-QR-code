import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../data.js';

function Monuments() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from] = useState('en');
  const input = data.Monuments[0].description;
  const [output, setOutput] = useState('');
  // function that translate the data from the text area
  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    // post method to send the data to the database with parameters
    axios
      .post(
        'https://libretranslate.de/translate',
        params,

        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      // response and return the translated data
      .then((res) => {
        setOutput(res.data.translatedText);
      });
  };
  // React hook to fetch data from APIs
  useEffect(() => {
    // get method to send http request
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      // then method to response to the request
      .then((res) => {
        // res.data it has all language options
        setOptions(res.data);
      });
  }, []);
  // [] to fetch the data once

  return (
    <div className="app">
      {/* div for the first image */}
      <div class="col-lg-7">
        <img
          class="img-fluid rounded mb-4 mb-lg-0"
          src={data.Monuments[0].image}
          alt=""
        />
      </div>
      {/* center tag to put content of the page in the center */}
      <center>
        <div id="root"></div>

        <div class="choose">Choose Language ({to}) :</div>
        <select
          onChange={(e) => setTo(e.target.value)}
          onClick={(e) => translate()}
        >
          {/* map function to map in the array (res.data)*/}
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        {/* div for the teaxt area to show the data of the monument on it */}
        <div>
          <textarea
            rows={6}
            cols={103}
            disabled
            value={output}
            id="txtFld"
            placeholder="Please Select Language"
            className="text"
          ></textarea>
        </div>
        {/* div for choose voice lable */}
        <div className="choose">
          <div class="uiunit">
            <label for="speakerMenu" className="choose">
              Choose Voice:{' '}
            </label>
          </div>
          <select id="speakerMenu"></select>
        </div>

        <div class="uiunit_none">
          <label for="rateFld">Speed: </label>
          <input
            type="number"
            id="rateFld"
            min="0.5"
            max="2"
            step="0.1"
            value="0.8"
          />
        </div>

        {/* div for speak button */}
        <div>
          <button type="button" id="speakBtn" class="button">
            <span class="button__text">Speak</span>
            <span class="button__icon">
              <ion-icon name="volume-medium-outline"></ion-icon>
            </span>
          </button>
        </div>

        <div id="temp"></div>
        <div class="more">
          <div class="card">
            <div class="content">
              <img class="A1" src="/images/Akhnatoon/a2.jpg" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="content">
              <img class="A1" src="/images/Akhnatoon/a3.jpg" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="content">
              <img class="A1" src="/images/Akhnatoon/a4.jpg" alt="" />
            </div>
          </div>
          <div class="card">
            <div class="content">
              <img class="A1" src="/images/Akhnatoon/a5.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="uiunit">
          <select id="languageMenu"></select>
        </div>
      </center>
    </div>
  );
}

let allVoices, allLanguages, primaryLanguages, langtags, langhash, langcodehash;
let txtFld, rateFld, speakBtn, speakerMenu, languageMenu, blurbs;
let voiceIndex = 0;
let initialSetup = true;
const defaultBlurb = data.Monuments[0].description;

function init() {
  // qs---> document.quaryselector
  speakBtn = qs('#speakBtn');
  txtFld = qs('#txtFld');
  speakerMenu = qs('#speakerMenu');
  langtags = getLanguageTags();
  speakBtn.addEventListener('click', talk, false);
  speakerMenu.addEventListener('change', selectSpeaker, false);

  createBlurbs();
  rateFld = qs('#rateFld');
  languageMenu = qs('#languageMenu');
  languageMenu.addEventListener('change', selectLanguage, false);
  langhash = getLookupTable(langtags, 'name');
  langcodehash = getLookupTable(langtags, 'code');

  if (window.speechSynthesis) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
      //Chrome gets the voices asynchronously so this is needed
      speechSynthesis.onvoiceschanged = setUpVoices;
    }
    setUpVoices(); //for all the other browsers
  } else {
    speakBtn.disabled = true;
    speakerMenu.disabled = true;
    languageMenu.disabled = true;
    qs('#warning').style.display = 'block';
  }
}
function setUpVoices() {
  allVoices = getAllVoices();
  allLanguages = getAllLanguages(allVoices);
  primaryLanguages = getPrimaryLanguages(allLanguages);
  filterVoices();
  if (initialSetup && allVoices.length) {
    initialSetup = false;
    createLanguageMenu();
  }
}
function talk() {
  let sval = Number(speakerMenu.value);
  let u = new SpeechSynthesisUtterance();
  u.voice = allVoices[sval];
  u.lang = u.voice.lang;
  u.text = txtFld.value;
  u.rate = Number(rateFld.value);
  speechSynthesis.speak(u);
}
function createLanguageMenu() {
  let code = `<option selected value="all">Show All</option>`;
  let langnames = [];
  primaryLanguages.forEach(function (lobj, i) {
    langnames.push(langcodehash[lobj.substring(0, 2)].name);
  });
  langnames.sort();
  langnames.forEach(function (lname, i) {
    let lcode = langhash[lname].code;
    code += `<option value=${lcode}>${lname}</option>`;
  });
  languageMenu.innerHTML = code;
}
function createSpeakerMenu(voices) {
  let code = ``;
  voices.forEach(function (vobj, i) {
    code += `<option value=${vobj.id}>${vobj.name} (${vobj.lang})`;
    code += vobj.voiceURI.includes('.premium') ? ' (premium)' : ``;
    code += `</option>`;
  });
  speakerMenu.innerHTML = code;
}
function getAllLanguages(voices) {
  let langs = [];
  voices.forEach((vobj) => {
    langs.push(vobj.lang.trim());
  });
  return [...new Set(langs)];
}
function getPrimaryLanguages(langlist) {
  let langs = [];
  langlist.forEach((vobj) => {
    langs.push(vobj.substring(0, 2));
  });
  return [...new Set(langs)];
}
function selectSpeaker() {
  voiceIndex = speakerMenu.selectedIndex;
}
function selectLanguage() {
  filterVoices();
  speakerMenu.selectedIndex = 0;
}
let voices;
function filterVoices() {
  let langcode = languageMenu.value;
  voices = allVoices.filter(function (voice) {
    return langcode === 'all' ? true : voice.lang.indexOf(langcode + '-') >= 0;
  });
  createSpeakerMenu(voices);
  let t = blurbs[languageMenu.options[languageMenu.selectedIndex].text];
  txtFld.value = t ? t : defaultBlurb;
  speakerMenu.selectedIndex = voiceIndex;
}

function getAllVoices() {
  let voicesall = speechSynthesis.getVoices();
  let vuris = [];
  let voices = [];
  //unfortunately we have to check for duplicates
  voicesall.forEach(function (obj, index) {
    let uri = obj.voiceURI;
    if (!vuris.includes(uri)) {
      vuris.push(uri);
      voices.push(obj);
    }
  });
  voices.forEach(function (obj, index) {
    obj.id = index;
  });
  return voices;
}
function createBlurbs() {
  blurbs = {};
}
function getLanguageTags() {
  let langs = [
    'ar-Arabic',
    'cs-Czech',
    'da-Danish',
    'de-German',
    'el-Greek',
    'en-English',
    'eo-Esperanto',
    'es-Spanish',
    'et-Estonian',
    'fi-Finnish',
    'fr-French',
    'he-Hebrew',
    'hi-Hindi',
    'hu-Hungarian',
    'id-Indonesian',
    'it-Italian',
    'ja-Japanese',
    'ko-Korean',
    'la-Latin',
    'lt-Lithuanian',
    'lv-Latvian',
    'nb-Norwegian Bokmal',
    'nl-Dutch',
    'nn-Norwegian Nynorsk',
    'no-Norwegian',
    'pl-Polish',
    'pt-Portuguese',
    'ro-Romanian',
    'ru-Russian',
    'sk-Slovak',
    'sl-Slovenian',
    'sq-Albanian',
    'sr-Serbian',
    'sv-Swedish',
    'th-Thai',
    'tr-Turkish',
    'zh-Chinese',
  ];
  let langobjects = [];
  for (let i = 0; i < langs.length; i++) {
    let langparts = langs[i].split('-');
    langobjects.push({ code: langparts[0], name: langparts[1] });
  }
  return langobjects;
}
// Generic Utility Functions
function qs(selectorText) {
  //saves lots of typing for those who eschew Jquery
  return document.querySelector(selectorText);
}
function getLookupTable(objectsArray, propname) {
  return objectsArray.reduce(
    (accumulator, currentValue) => (
      (accumulator[currentValue[propname]] = currentValue), accumulator
    ),
    {}
  );
}
document.addEventListener('DOMContentLoaded', function (e) {
  try {
    init();
  } catch (error) {
    console.log("Data didn't load", error);
  }
});

export default Monuments;
