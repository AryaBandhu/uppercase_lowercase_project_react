import "./App.css";
import WebNevbar from "./components/web_nevbar";
import Textform1 from "./components/Textform";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Theme from "./components/Theme";

function App() {

  const [colorScheme,setColorScheme] = useState("cupcake")
  const countryNames = ["London","Amsterdam","Andorra","Astrakhan","Athens","Belfast","Belgrade","Berlin","Bratislava","Brussels","Bucharest","Budapest","Busingen","Chisinau","Copenhagen","Dublin","Gibraltar","Guernsey","Helsinki","Isle_of_Man","Istanbul","Jersey","Kaliningrad","Kiev","kirov","Kiev","Lisbon","Ljubljana","Luxembourg","Madrid","Malta","Mariehamn","Minsk","Monaco","Moscow","Nicosia","Oslo","Paris","Podgorica","Prague","Riga","Rome","Samara","San_Marino","Sarajevo","Saratov","Simferopol","Skopje","Sofia","StockHolm","Tallinn","Tirane","Tiraspol","Ulyanovsk","Uzhgorod","Vaduz","Vatican","Vienna","Vilnius","Volgograd","Warsaw","Zagreb","Zaporozhye","Zurich"]

  for (let i of countryNames) {
    const options = { timeZone: `Europe/${i}` };
    const formatter = new Intl.DateTimeFormat('en-GB', options)
    console.log(formatter.resolvedOptions().timezone)
  }

  return (
    <main data-theme={colorScheme} className="min-h-screen">
      <Router>
        <div className="App">
          <WebNevbar title ="Arya Bandhu" other = "Service not Working" />
          <Routes>
          <Route path="/themes" element={<Theme colorScheme={colorScheme} setColorScheme={setColorScheme} />} />
            <Route path="/" element={
                  <div className="container mt-5">
                      <Textform1 tittle="Text Manipulator: Uppercase | Lowercase | Word Counter" colorScheme={colorScheme} />
                  </div>} 
            />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
