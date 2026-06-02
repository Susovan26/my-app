import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Parsonalcourier from "./Components/Parsonalcourier";
import Businesscourier from "./Components/Businesscourier";
import Largeheavycourier from "./Components/Largeheavycourier";
import Singlepakage from "./Components/Singlepakage";
import Multipakage from "./Components/Multipakage";
import Parttruckload from "./Components/Parttruckload";
import Fulltruckload from "./Components/Fulltruckload";
import Household from "./Components/Household";
import Lastmiledelivery from "./Components/Lastmiledelivery";
import Ratecalculator from "./Components/Ratecalculator";
import Track from "./Components/Track";
import Media from "./Components/Media";
import Private from "./Components/Private";
import Business from "./Components/Business";
import Contact from "./Components/Contact";
import Personallogin from "./Components/Personallogin";
import Businesslogin from "./Components/Businesslogin";
import Franchiselogin from "./Components/Franchiselogin";
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
       <Route path="/single-pakage" element={<Singlepakage/>} />
       <Route path="/multi-pakage" element={<Multipakage/>} />
       <Route path="/part-truck-load" element={<Parttruckload/>} />
       <Route path="/full-truck-load" element={<Fulltruckload/>} /> 
       <Route path="/house-hold" element={<Household/>} /> 
       <Route path="/last-mile-delivery" element={<Lastmiledelivery/>} /> 
      <Route path="/rate-calculator" element={<Ratecalculator/>} />  
       <Route path="/track" element={<Track/>} />  
       <Route path="/media" element={<Media/>} /> 
        <Route path="/private" element={<Private/>} />   
       <Route path="/business" element={<Business/>} />     
        <Route path="/contact" element={<Contact/>} />  
        <Route path="/personal-login" element={<Personallogin/>} />      
        <Route path="/business-login" element={<Businesslogin/>} />   
        <Route path="/franchise-login" element={<Franchiselogin/>} />          
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;