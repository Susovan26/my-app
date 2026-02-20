import React from "react";

function Footer(){
return(
<>
{/* <!-- About Section  -->*/}
<footer className="footer-area brand-2 position-relative">
        <div className="container">
            <div className="footer-up">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 padlft wow fadeInUp animated" data-wow-delay="100ms">
                        <h6>About Company</h6>
                        <div className="contact-info">
                            <p>With a strong focus on precision, safety, and timely delivery, Susovan offers end-to-end transportation and supply chain services tailored to meet the unique needs of every client.</p>
                        </div>
                    </div>

                     <div className="col-lg-5 col-md-6 com-sm-12 wow fadeInUp animated" data-wow-delay="200ms">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mdcol">
                                <h6>Company</h6>
                                <ul>
                                    <li>
                                        <a href="about.html">About Us</a>
                                        <a href="rate-calculator.html">Calculator</a>
                                        <a href="track.html">Track</a>
                                        <a href="faq.html">FAQs</a>
                                        <a href="inquiry.html">Inquiry Now</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12  mdcol wow fadeInUp animated" data-wow-delay="300ms">
                                <h6>Services</h6>
                                <ul>
                                    <li>
                                        <a href="#">Parsonal Courier</a>
                                        <a href="#">Business Courier</a>
                                        <a href="#">Large & Heavy Courier</a>
                                        <a href="#">Single Pakage</a>
                                        <a href="#">Last Mile Delhivery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
                        <div className="subscribe-form">
                            <h6>Stay in touch</h6>
                            <div className="contact-info">
                                <p><b>Location:</b> 123, Broklyn Street, New York</p>
                                <p><b>Phone:</b> +99 268 827 2500</p>
                                <p><b>E-mail:</b> info@experia.com</p>
                                <p><b>Opening Hour:</b> 08.00 AM-09.00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>



    <div className="footer-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-12">
                    <p className="copyright-line">© 2026, Susovan. All Rights Reserved</p>
                </div>
                <div className="col-xl-6 col-lg-5 col-12"> </div>
                <div className="col-xl-3 col-lg-3 col-12 text-end">
                    <div className="social-area">
                        <a href="#"><i className="lab la-facebook-f"></i></a>
                        <a href="#"><i className="lab la-youtube"></i></a>
                        <a href="#"><i className="lab la-twitter"></i></a>
                        <a href="#"><i className="lab la-instagram"></i></a>
                        <a href="#"><i className="lab la-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <a href="#top" className="go-top"><i className="las la-angle-up"></i></a>
</>

)


}    
export default Footer;