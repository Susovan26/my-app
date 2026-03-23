import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Solution, Ship Now, Login
  const [openFirstMile, setOpenFirstMile] = useState(false); // First Mile nested

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle main dropdowns
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenFirstMile(false); // Close nested when switching main
  };

  // Toggle First Mile nested dropdown
  const toggleFirstMile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenFirstMile(!openFirstMile);
  };

  return (
    <>
      {/* Header Top */}
      <div className="header-top dark-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="contact-info">
                <i className="las la-map-marker"></i>
                <span>123, Brooklyn Street, New York</span>
                <i className="las la-envelope"></i>
                <span>info@experia.com</span>
                <i className="las la-clock"></i>
                <span>08.00 AM-09.00 PM</span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 text-end">
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

      {/* Main Header */}
      <div className={`header-area ${isSticky ? "sticky-header" : ""}`}>
        <div className="sticky-area">
          <div className="navigation">
            <div className="container-fluid">
              <div className="header-inner-box">
                {/* Logo */}
                <div className="logo">
                  <a className="navbar-brand" href="/">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </a>
                </div>

                {/* Navbar */}
                <div className="main-menu">
                  <nav className="navbar navbar-expand-lg">
                    <button
                      className="navbar-toggler"
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className={`collapse navbar-collapse justify-content-center ${
                        isMobileMenuOpen ? "show" : ""
                      }`}
                    >
                      <ul className="navbar-nav m-auto">
                        {/* Home */}
                        <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                        </li>

                        {/* About Us */}
                        <li className="nav-item">
                          <a className="nav-link" href="/about">About Us</a>
                        </li>

                        {/* Solution - raw design এর মত nested */}
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleDropdown(1);
                            }}
                          >
                            Solution <i className="las la-plus"></i>
                            <span className="sub-nav-toggler"></span>
                          </a>
                          <ul className={`sub-menu ${openDropdown === 1 ? "show" : ""}`}>
                            <li>
                              <div className="dropdown">
                                <button className="dropbtn" onClick={toggleFirstMile}>
                                  First Mile Delivery
                                </button>
                                <div className={`dropdown-content ${openFirstMile ? "show" : ""}`}>
                                  <ul>
                                    <li><a href="/personal-courier">Personal Courier</a></li>
                                    <li><a href="/business-courier">Business Courier</a></li>
                                    <li><a href="/large-heavy-courier">Large & Heavy Courier</a></li>
                                    <li><a href="/single-pakage">Single Pakage</a></li>
                                    <li><a href="/multi-pakage">Multi Pakage</a></li>
                                    <li><a href="/part-truck-load">Part Truck Load</a></li>
                                    <li><a href="/full-truck-load">Full Truck Load</a></li>
                                    <li><a href="/house-hold">House Hold</a></li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li><a href="/last-mile-delivery">Last Mile Delivery</a></li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="/rate-calculator">Rate Calculator</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/track">Track</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/media">Media</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/careers">Careers</a>
                        </li>

                        {/* Ship Now */}
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleDropdown(2);
                            }}
                          >
                            Ship Now <i className="las la-plus"></i>
                            <span className="sub-nav-toggler"></span>
                          </a>
                          <ul className={`sub-menu ${openDropdown === 2 ? "show" : ""}`}>
                            <li><a href="/private">Private Person</a></li>
                            <li><a href="/business">Business</a></li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="/contact">Contact Us</a>
                        </li>

                        {/* Login */}
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleDropdown(3);
                            }}
                          >
                            Login <i className="las la-plus"></i>
                            <span className="sub-nav-toggler"></span>
                          </a>
                          <ul className={`sub-menu ${openDropdown === 3 ? "show" : ""}`}>
                            <li><a href="/personal-login">Personal</a></li>
                            <li><a href="/business-login">Business</a></li>
                            <li><a href="/franchise-login">Franchise</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Phone Number */}
                <div className="phone-number-box">
                  <div className="icon">
                    <i className="las la-phone-volume"></i>
                  </div>
                  <div className="phone">
                    <p>Have any questions?</p>
                    <a href="tel:+992688272500">+99 268 827 2500</a>
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