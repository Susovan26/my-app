import React from "react";
export default function NavBar(){
    return(
          <>
  <div className="header-top dark-bg">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-xs-12">
                    <div className="contact-info">
                        <i className="las la-map-marker"></i>
                        <p>123, Broklyn Street, New York</p>
                        <i className="las la-envelope"></i>
                        <p>info@experia.com</p>
                        <i className="las la-clock"></i>
                        <p>08.00 AM-09.00 PM</p>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-xs-12 text-end">
                    <div className="header_top_right">
                        <div className="social-area">
                            <a href="#"><i className="lab la-facebook-f"></i></a>
                            <a href="#"><i className="lab la-youtube"></i></a>
                            <a href="#"><i className="lab la-twitter"></i></a>
                            <a href="#"><i className="lab la-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   

    <div className="header-area">
        <div className="sticky-area">
            <div className="navigation">
                <div className="container-fluid">
                    <div className="header-inner-box">
                        <div className="logo">
                            <a className="navbar-brand" href="index.html"><img src="assets/img/logo/logo.png" alt="experia-logo"/></a>
                        </div>

                        <div className="main-menu">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html">About&nbsp;Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Solution<i className="las la-plus"></i>
                                                <span className="sub-nav-toggler"> </span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <div className="dropdown">
                                                      <button className="dropbtn">First Mile Delhivery</button>
                                                      <div className="dropdown-content">
                                                        <ul>
                                                            <li><a href="parsonal_courier.html">Parsonal Courier</a></li>
                                                            <li><a href="business_courier.html">Business Courier</a></li>                                                
                                                            <li><a href="large_heavy_courier.html">Large & Heavy Courier</a></li>
                                                            <li><a href="single_pakage.html">Single Pakage</a></li>
                                                            <li><a href="multi_pakage.html">Multi Pakage</a></li>
                                                            <li><a href="part_tracuk_load.html">Part Tracuk Load</a></li>
                                                            <li><a href="full.html">Full Tracuk Load</a></li>
                                                            <li><a href="house_holad.html">House Holad</a></li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                </li>
                                                <li><a href="last_mile_delhivery.html">Last Mile Delhivery</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="rate-calculator.html">Rate&nbsp;Calculator</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="track.html">Track</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="media.html">Media</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="careers.html">Careers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Ship Now<i className="las la-plus"></i>
                                                <span className="sub-nav-toggler"> </span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li><a href="private.html">Private Person</a></li>
                                                <li><a href="business.html">Business</a></li>                                                
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact&nbsp;Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Login<i className="las la-plus"></i>
                                                <span className="sub-nav-toggler"> </span>
                                            </a>
                                            <ul className="sub-menu">
                                                <li><a href="personal.html">Personal</a></li>
                                                <li><a href="business_login.html">Business</a></li> 
                                                <li><a href="franchise.html">Franchise </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="phone-number-box">
                            <div className="icon">
                                <i className="las la-phone-volume"></i>
                            </div>
                            <div className="phone">
                                <p>Have any questions?</p>
                                <a href="#">+99 268 827 2500</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>  
    );
}