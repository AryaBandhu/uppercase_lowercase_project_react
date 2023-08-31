import "./App.css";
import WebNevbar from "./components/web_nevbar";
import Textform1 from "./components/Textform";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [text, textMode] = useState('primary');
  const [mode, setMode] = useState('light');
  const [nevtext, setnevtext] = useState('light');

  let darktoggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setnevtext('dark')
      textMode('primary')
      document.body.style.backgroundColor = '#495057'
      showAlert("Dark mode Activated !!" , "Success");
    }
    else{
      setMode('light');
      setnevtext('light')
      textMode('primary')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Activated !!" , "Success");
    }
  };

  let redtoggleMode = () => {
      setMode('red');
      textMode('warning')
      setnevtext('dark')
      document.body.style.backgroundColor = '#d94250'
      showAlert("Red Theme Activated !!" , "Success");
  };

  let greentoggleMode = () => {
    setMode('green');
    setnevtext('dark')
    textMode('primary')
    document.body.style.backgroundColor = '#66e366'
    showAlert("Green Theme Activated !!" , "Success");
  };

  let yellowtoggleMode = () => {
    setMode('yellow');
    setnevtext('light')
    textMode('primary')
    document.body.style.backgroundColor = '#eeff4d'
    showAlert("Yellow Theme Activated !!" , "Success");
  };

  // this function create for Alert feture 
  const [alert, setAlert] = useState(null);

  let showAlert = (massage , type) => {
    setAlert({
      msg : massage,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  };
  
  return (
    <>
      <Router>
        <div className="App">
          <WebNevbar tittle ="Arya Bandhu" other = "Service not Working" 
            mode={mode} 
            nevtext={nevtext}
            darktoggleMode={darktoggleMode} 
            redtoggleMode={redtoggleMode} 
            greentoggleMode={greentoggleMode}
            yellowtoggleMode={yellowtoggleMode}
          />
          <Alert alerts={alert}/>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={
                  <div className="container mt-5">
                      <Textform1 tittle="Mini Application" mode={mode} text={text}/>
                  </div>} 
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
