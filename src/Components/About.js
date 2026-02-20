import React from "react";

function About(){
return(
<>
{/* <!-- About Section  -->*/}
 <div className="about-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5 order-2 order-lg-1">
                    <div className="about-img wow fadeInRight animated" data-wow-delay="100ms">
                        <img src="assets/img/about/1.jpg" alt=""/>
                        <div className="about-counter wow fadeInLeft animated" data-wow-delay="400ms">
                            <div className="counter-icon">
                                <img src="assets/img/icon/courier.png" alt=""/>
                            </div>
                            <div className="counter-number">
                                <span className="counting" data-counterup-nums="6">6</span>
                            </div>
                            <h6>Years Of Experience</h6>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 order-1 order-lg-2">
                    <div className="about-content-wrap">
                        <div className="section-title">
                            <p>About Susovan Courier Service</p>
                            <h2>
                                We Are Providing best way of Courier & Parcel Delivery!
                            </h2>
                        </div>
                        <div className="about-content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="about-content-right">
                                        <p>
                                            At Susovan, we are more than just a transportation company—we are your trusted partner in navigating the complexities of logistics and supply chain management. We deliver smart, reliable, and cost-effective logistics solutions designed to keep your business moving efficiently.
                                        </p>
										<p className="custom-border-left">6 years of experience in the industry, we have built a reputation for excellence, reliability, customer service.</p>
                                        <p>
                                            With a strong focus on precision, safety, and timely delivery, Susovan offers end-to-end transportation and supply chain services tailored to meet the unique needs of every client. Our experienced team, modern infrastructure, and technology-driven approach ensure seamless operations, real-time visibility, and consistent performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="signature-wrap">
                            <a href="#" className="main-btn primary d-none d-md-block mt-30">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

)


}    
export default About;