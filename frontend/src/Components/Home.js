import React from "react";
import Banner from "./Banner";
import Homeabout from "./Homeabout";
import Service from "./Service";
import Customers from "./Customers";
import Quote from "./Quote";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
function Home() {
  return (
    <>
    <Banner/>
     <Homeabout/>
      <Service/>
         <Customers/>
         <Quote/>
               <Testimonial/>
           <Blog/>     
    </>
  );
}

export default Home;