import React from "react";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Customers from "./Customers";
import Quote from "./Quote";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
function Home() {
  return (
    <>
    <Banner/>
     <About/>
      <Service/>
         <Customers/>
         <Quote/>
               <Testimonial/>
           <Blog/>     
    </>
  );
}

export default Home;