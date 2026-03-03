import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Parsonalcourier from "./Components/Parsonalcourier";
import Businesscourier from "./Components/Businesscourier";
import Largeheavycourier from "./Components/Largeheavycourier";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    // jQuery এবং Bootstrap JS লোড করা
    const loadScripts = () => {
      // jQuery চেক করা
      if (typeof window.jQuery === 'undefined') {
        const script = document.createElement('script');
        script.src = '/assets/js/jquery-1.12.4.min.js';
        script.async = true;
        document.body.appendChild(script);
        
        script.onload = () => {
          // Bootstrap JS
          const bootstrapScript = document.createElement('script');
          bootstrapScript.src = '/assets/js/bootstrap.min.js';
          document.body.appendChild(bootstrapScript);
        };
      }
    };

    loadScripts();
  }, []);
return (
    <Router>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/personal-courier" element={<Parsonalcourier/>} />
       <Route path="/business-courier" element={<Businesscourier/>} />
       <Route path="/large-heavy-courier" element={<Largeheavycourier/>} />
 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;