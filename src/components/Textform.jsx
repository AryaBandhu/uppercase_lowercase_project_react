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
    msg.text = text;
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


  // word counter logic 
  const totleWord = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div>
        <h1 className={`text-${props.text} mb-4`} >{props.tittle}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control`}
            data-bs-theme={`${props.nevtext}`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleonechange}
            placeholder="Enter Text Here..."
          ></textarea>
        </div>
        <div className="flex flex-wrap gap-2">
          <button disabled={text.length === 0} className="btn btn-primary" onClick={textuppercase}>
            Uppercase{" "}
          </button>
          <button disabled={text.length === 0} className="btn btn-primary" onClick={textlowercase}>
            Lowercase{" "}
          </button>
          <button disabled={text.length === 0} className="btn btn-secondary" onClick={textspeak}>
            Speak Text
          </button>
          <button disabled={text.length === 0} type="button" className="btn btn-warning" onClick={textcopy}>
            Copy Text
          </button>
          <button disabled={text.length === 0} type="button" className="btn btn-error" onClick={textclear}>
            Clear Text
          </button>
        </div>
      </div>

      <div className={`text-center space-y-2 mt-4`}>
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
