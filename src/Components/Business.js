import React from "react";
import { Link } from "react-router-dom";

function Private() {
    return (
        <>
            {/* About Section */}
            <div className="breadcrumb-area about-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-title">
                                <h1>Ship Now as Business</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quotation-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-12">
                            <div className="contact-wrap">
                                <div className="section-title">
                                    <p>Delivery Package With Reasonable Service!</p>
                                    <h2>A renowned Courier & Delivery Service</h2>
                                </div>
                                <div className="contact-desc">
                                    <p>
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
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12 offset-xl-1">
                            <div className="quotation-wrap wow fadeInUp animated" data-wow-delay="200ms">
                                <div className="quotation-inner">
                                    <h5 className="quotation-heading">I am shipping as a...</h5>
                                    {/* Fixed: removed self-closing, added noValidate */}
                                    <form className="contactForm" method="post" action="#" noValidate>
                                        <div className="row">
                                            <div className="col-12 col-md-12">
                                                <label className="form-label">Name</label>
                                                <input className="form-control" type="text" placeholder="Name" required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label className="form-label">Contact Number</label>
                                                <input className="form-control" type="number" placeholder="Contact Number" required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label className="form-label">E-mail</label>
                                                <input className="form-control" type="email" placeholder="E-mail" required />
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label className="form-label">From Country</label>
                                                <select className="form-control">
                                                    <option>Country Name</option>
                                                    <option>Country Name</option>
                                                    <option>Country Name</option>
                                                    <option>Country Name</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <label className="form-label">To Country</label>
                                                <select className="form-control">
                                                    <option>Country Name</option>
                                                    <option>Country Name</option>
                                                    <option>Country Name</option>
                                                    <option>Country Name</option>
                                                </select>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label">Pickup Date</label>
                                                <input type="date" required />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label">Delivery Date</label>
                                                <input type="date" required />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label">Dimensions</label>
                                                <input className="form-control" type="text" placeholder="20 sft" required />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <label className="form-label">Weight</label>
                                                <input className="form-control" type="text" placeholder="2.5 KG" required />
                                            </div>

                                            <div className="col-12">
                                                <a href="#" className="main-btn primary">
                                                    submit request <i className="las la-arrow-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Private;