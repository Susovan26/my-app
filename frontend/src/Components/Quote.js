import React from "react";

function Quote(){
return(
<>
{/* <!-- About Section  -->*/}
<div className="feature-area dark-bg section-padding pb-0">
        <div className="container">
          
			            <div className="row">
                <div className="col-xl-5 col-lg-6 col-12">
                    <div className="contact-wrap">
                        <div className="section-title">
                            <p>Delivery Package With Reasonable Service!</p>
                            <h2 className="text-white">A renowned Courier & Delivery Service Company</h2>
                        </div>
                        <div className="contact-desc">
                            <p className="text-white">
                                We offer deliver, solutions, and services across the entire
                                parcel value chain. We support our customers on their way to a
                                more sustainable future – no matter how far along the journey
                                to courier delivery with sustainable cargo systems.
                            </p>
                        </div>
                        <div className="contact-list-wrap">
                            <div className="row">
                                <div className="col-12 col-lg-6 col-sm-6">
                                    <ul className="list-unstyled contact-list">
                                        <li><i className="las la-check"></i>Reliable & Perfection</li>
                                        <li><i className="las la-check"></i>Affordable Low Cost</li>
                                        <li><i className="las la-check"></i>On-time Delivering</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-6 col-sm-6">
                                    <ul className="list-unstyled contact-list">
                                        <li><i className="las la-check"></i>50% More Delivery Cost</li>
                                        <li><i className="las la-check"></i>Service using Modern Way</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="contact-btn">
                            <a className="main-btn primary" href="#">learn more <i className="las la-arrow-right"></i></a>
                            <a className="main-btn white" href="#">asked query <i className="las la-arrow-right"></i></a>
                        </div>
                        <div className="contact-quote d-flex mt-40">
                            <div className="contact-icon">
                                <img src="assets/img/noteicon.png" alt="icon"/>
                            </div>
                            <div className="contact-info">
                                <p>Receive right package within 3-5 days when you fill out this form. Or Contact with Us
                                    : <a href="tel:01061245741">+99 01061245741</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-12 offset-xl-1 wow fadeInUp animated" data-wow-delay="200ms">
                    <div className="quotation-wrap">
                        <div className="quotation-inner">
                            <h5 className="quotation-heading">Request A Quote</h5>
                            <p className="quotation-desc">
                                There are various ways to deliver courier so you can have the right place that you’re making a positive impact.
                            </p>
                            <form className="contactForm" method="post" action="https://capricorn-theme.com/html/xperia/assets/php/contact.php"
                                novalidate="novalidate">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Name
                                        </label>
                                        <input className="form-control" type="text" placeholder="Name" required=""/ >
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Company Name
                                        </label>
                                        <input className="form-control" type="text" placeholder="Compnay Name"
                                            required="" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Contact Number
                                        </label>
                                        <input className="form-control" type="number" placeholder="Contact Number"
                                            required=""/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">E-mail
                                        </label>
                                        <input className="form-control" type="email" placeholder="E-mail" required=""/ >
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Service Type</label>
                                        <select className="form-control">
                                            <option>Standard Courier</option>
                                            <option>Express Courier</option>
                                            <option>Over Night Courier</option>
                                            <option>Pallet Courier</option>
                                            <option>International Courier</option>
                                            <option>Warehousing</option>
                                        </select>
                                        <div className="nice-select form-control">
                                            <span className="current">Standard Courier</span>
                                            <ul className="list">
                                                <li className="option">
                                                    Standard Courier
                                                </li>
                                                <li className="option">
                                                    Express Courier
                                                </li>
                                                <li className="option">
                                                    Over Night Courier
                                                </li>
                                                <li className="option">
                                                    Pallet Courier
                                                </li>
                                                <li className="option">
                                                    International Courier
                                                </li>
                                                <li className="option">
                                                    Warehousing
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Freight Type</label>
                                        <select className="form-control">
                                            <option>Air Freight</option>
                                            <option>Sea Freight</option>
                                            <option>Ground Freight</option>
                                        </select>
                                        <div className="nice-select form-control">
                                            <span className="current">Air Freight</span>
                                            <ul className="list">
                                                <li className="option">
                                                    Air Freight
                                                </li>
                                                <li className="option">
                                                    Sea Freight
                                                </li>
                                                <li className="option">
                                                    Ground Freight
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Pickup Date
                                        </label>
                                        <input type="date" required=""/>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Delivery Date
                                        </label>
                                        <input type="date" required="" />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Dimensions
                                        </label>
                                        <input className="form-control" type="text" placeholder="20 sft" required="" />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label">Weight
                                        </label>
                                        <input className="form-control" type="text" placeholder="2.5 KG" required="" />
                                    </div>

                                    <div className="col-12">
                                        <a href="#" className="main-btn primary">
                                            submit request <i className="las la-arrow-right"></i>
                                        </a>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-100">
                <div className="col-12 col-lg-4">
                    <div className="more-feature">
                        <p className="text-white">
                            If you have any delivery queries, don't hesitate to contact our team, or you can also phone call us anytime
                            <a href="tel:01061245741">(880) 01171022377</a>
                        </p>
                        <a href="#" className="main-btn border-btn">Get Quote <i className="las la-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-12 col-lg-8 wow fadeInUp animated" data-wow-delay="400ms">
                    <div className="video-section">
                        <a className="popup-video video-play-btn mfp-iframe" href="https://www.youtube.com/watch?v=zHwiZyra5mk">
                            <i className="las la-play"></i><span>watch our video!</span></a>
                    </div>
                    <div className="pop-up-video">
                        <a href="https://www.youtube.com/watch?v=i4a7aeA8F60" className="video-play-btn mfp-iframe">
                            <i className="las la-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

)


}    
export default Quote;