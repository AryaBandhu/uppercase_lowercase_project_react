import React, { useState } from "react";
import proptype from "prop-types";
import copy from "copy-to-clipboard";

export default function Textform(props) {
  const [text, settext] = useState("");
  const [copyText, setCopyText] = useState('');

  let textuppercase = () => {
    console.log("Convert Uppercase");
    let converttext = text.toUpperCase();
    settext(converttext);
  };

  let textlowercase = () => {
    console.log("Convert Lowercase");
    let converttext = text.toLowerCase();
    settext(converttext);
  };

  // Ai speak text 
  let textspeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text =text;
    window.speechSynthesis.speak(msg);
    console.log("Voice Started..");
  };
 
  let handleonechange = (event) => {
    settext(event.target.value);
    setCopyText(event.target.value);
  };
 
  // for copy text
  const textcopy = () => {
      copy(copyText);
      document.getSelection().removeAllRanges();
      alert(`You have copied "${copyText}"`);
  }

  const textclear = () => {
    settext('');
    alert('all text clear .... !! ')
  }

  // textform color logic 
  let theme = {};
  switch(props.mode) {
    case 'dark':{
        theme = {backgroundColor: "#2B3035"};
        break ;}
    case 'light':{
        theme = {backgroundColor: "#F8F9FA"};
        break ;}
    case 'red':{
        theme = {backgroundColor: "#551010"};
        break ;}
    case 'yellow' :{
        theme = {backgroundColor: "#D1BC34"};
        break ;}
    case 'green' :{
        theme = {backgroundColor: "#016901"};
        break;}
    default:
      return 'arya';
  }

  // word counter logic 
  const totleWord = text.trim( ) === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div>
        <h1 className={`text-${props.text} mb-4`} >{props.tittle}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control 
            text-${props.mode === 'light' ? "secondary" : "light"}`}
            data-bs-theme={`${props.nevtext}`}
            style={theme}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleonechange}
            placeholder="Enter Text Here..."
          ></textarea>
        </div>
        <button disabled = { text.length ===0 } className="btn btn-warning my-1" onClick={textuppercase}>
          Convert Uppercase{" "}
        </button>
        <button disabled = { text.length ===0 } className="btn btn-primary ms-3 my-1" onClick={textlowercase}>
          Convert Lowercase{" "}
        </button>
        <button disabled = { text.length ===0 } className="btn btn-success ms-3 my-1" onClick={textspeak}>
          Speak Text
        </button>
        <button disabled = { text.length ===0 } type="button" className="btn btn-secondary ms-3 my-1" onClick={textcopy}>
          Copy Text 
        </button>
        <button disabled = { text.length ===0 } type="button" className="btn btn-danger ms-3 my-1" onClick={textclear}>
          Clear Text
        </button>
      </div>

      <div className={`container bg-c text-${props.mode === "light" ? "dark" : "light"} `}>
        <h1 className={`text-${props.text}`}>Your Text Summery </h1>
        <p className={`text-${props.text}`}>
          {totleWord} word and {text.length} characters</p>
        <p className={`text-${props.text}`}>{0.008 * totleWord} minute reading time</p>
      </div>
    </>
  );
}

Textform.proptype = {
  tittle: proptype.string,
};

Textform.defaultprop = {
  tittle: "Enter text",
};
