import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            {/* About Section */}
            <div className="breadcrumb-area about-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-title">
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page section-padding pb-50">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5">
                    <div className="contact-wrap">
                        <div className="contact-inner">
                            <div className="contact-headline">
                                <h3>Get Quatation for Delivery & Parcel Service?</h3>
                            </div>
                            <div className="contact-meta-info">
                                <div className="contact-single-info">
                                    <i className="las la-map-marker-alt"></i>
                                    <h6>Address</h6>
                                    <p>248, Park Street Avenue, NY, USA </p>
                                </div>
                                <div className="contact-single-info">
                                    <i className="las la-phone"></i>
                                    <h6>Phone</h6>
                                    <p>+14-127893 </p>
                                    <p>+12-356786</p>
                                </div>
                                <div className="contact-single-info">
                                    <i className="las la-envelope"></i>
                                    <h6>Mail</h6>
                                    <p>support@experia.com </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title">
                        <p>Let's Get In Touch</p>
                        <h2>Send Us a Message</h2>
                    </div>
                    <p>Pleas put up a topic below reated to your inquiry. If you dont find what you need fill out our contract form. For all enquiries please mail us using the below</p>
                    <div className="contact_form">
                        <form action="https://capricorn-theme.com/html/xperia/assets/inc/sendemail.php" className="comment-one_form contact-form-validated" novalidate="novalidate">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div>
                                        <input type="text" placeholder="Your Name" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div>
                                        <input type="email" placeholder="Email Address" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div>
                                        <input type="text" placeholder="Phone Number" name="phone"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div>
                                        <textarea name="message" placeholder="Write a Message"></textarea>
                                    </div>
                                    <a href="#" className="main-btn primary">Send Message<i className="las la-arrow-right"></i></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="contact-page google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2156438445377!2d-2.2936754376828103!3d53.4626665378156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2sOld%20Trafford!5e0!3m2!1sen!2sbd!4v1661768864802!5m2!1sen!2sbd" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
        </>
    );
}

export default Contact;