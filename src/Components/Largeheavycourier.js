import React from "react";
import { Link } from "react-router-dom";

function Largeheavycourier() {
    return (
        <>
            {/* About Section */}
            <div className="breadcrumb-area about-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-title">
                                <h1>Large & Heavy Courier</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Details Start */}
            <section className="service-details pb-50">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details_right">
                                <div className="service-details_img">
                                    <img src="/assets/img/service-details/standard_courier.jpg" alt="Personal Courier" />
                                </div>
                                <div className="service-details_content">
                                    <h3 className="service-details_title">Overview</h3>
                                    <p className="service-details_text-1">Standard delivery services are just what they sound like. Their primary purpose is to ship normal packages in basically the same ways that the postal service does.</p>
                                    <br />
                                    <p className="service-details_text-2">This courier service is the most used and cost-effective service to send parcels to any destination. It is common for delivery services to prioritise a package's weight over its size. Unlike expedited delivery services, these companies ensure that your packages arrive within two to three days from processing, making them more cost-effective than faster delivery services.</p>
                                    <br />
                                    <p className="service-details_text-2">This option is a good one if you know the weight of your expected package. If you're uncertain though, then you may want to think of other options. They'll surely offer a variety of delivery options, including some of the others on this list. Generally, though, most standard delivery services will transport packages by truck in 2 or 3 days.</p>
                                </div>
                                <div className="service-details_content">
                                    <h3 className="service-details_title">Type of Service</h3>
                                    <p className="service-details_text-2">Standard courier shipping services follow a set guideline depending on where you live. Often, this means the package has to be under a certain weight to not incur extra charges. For the most part, the threshold for large packages is 50kg. Standard deliveries often take 2-3 days for your package to reach you. This is the best and cheapest way for you to get your package if you're not in any rush. Standard delivery services also prioritize the weight of the package over its size.</p>
                                    <br />
                                </div>
                                <div className="service-details_content">
                                    <h3 className="service-details_title">Conclusion</h3>
                                    <p className="service-details_text-2">This option is a good one if you know the weight of your expected package. If you're uncertain though, then you may want to think of other options. They'll surely offer a variety of delivery options, including some of the others on this list. Generally, though, most standard delivery services will transport packages by truck in 2 or 3 days. </p>
                                    <br />
                                    <p className="service-details_text-2">Standard courier shipping services follow a set guideline depending on where you live. Often, this means the package has to be under a certain weight to not incur extra charges. For the most part, the threshold for large packages is 50kg. Standard deliveries often take 2-3 days for your package to reach you. This is the best and cheapest way for you to get your package if you're not in any rush. Standard delivery services also prioritize the weight of the package over its size.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="service-details_sidebar">
                                <div className="service-details_sidebar-service">
                                    <ul className="service-details_sidebar-service-list list-unstyled">
                                        <li className="d-block current">
                                            <Link to="/personal-courier">Personal Courier<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/business-courier">Business Courier<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/large-heavy-courier">Large & Heavy Courier<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/single-package">Single Package<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/multi-package">Multi Package<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/part-truck-load">Part Truck Load<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/full-truck-load">Full Truck Load<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/house-hold">House Hold<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                        <li className="d-block">
                                            <Link to="/last-mile-delivery">Last Mile Delivery<span> <i className="las la-long-arrow-alt-right"></i></span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="need_help_img"></div>
                                <div className="quotation-page section-padding">
                                    <div className="quotation-wrap wow fadeInUp animated" data-wow-delay="200ms">
                                        <div className="quotation-inner">
                                            <h5 className="quotation-heading">Request A Quote</h5>
                                            <form className="contactForm" method="post" action="#">
                                                <div className="row">
                                                    <div className="col-12 col-md-12">
                                                        <label className="form-label">Name</label>
                                                        <input className="form-control" type="text" placeholder="Name" required />
                                                    </div>
                                                    <div className="col-12 col-md-12">
                                                        <label className="form-label">Contact Number</label>
                                                        <input className="form-control" type="number" placeholder="Contact Number" required />
                                                    </div>
                                                    <div className="col-12 col-md-12">
                                                        <label className="form-label">E-mail</label>
                                                        <input className="form-control" type="email" placeholder="E-mail" required />
                                                    </div>
                                                    <div className="col-12 col-md-12">
                                                        <label className="form-label">Service Type</label>
                                                        <select className="form-control">
                                                            <option>Standard Courier</option>
                                                            <option>Express Courier</option>
                                                            <option>Over Night Courier</option>
                                                            <option>Pallet Courier</option>
                                                            <option>International Courier</option>
                                                            <option>Warehousing</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-12">
                                                        <label className="form-label">Delivery Date</label>
                                                        <input type="date" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="main-btn primary">
                                                            Submit Request <i className="las la-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Section */}
            <section className="section-delivery py-60 py-lg-100 py-xxl-120">
                <div className="container">
                    <div className="delivery-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-flex flex-column text-lg-center align-items-lg-center gap-30 gap-lg-40 position-relative">
                                    <h3 className="stancolor mb-20">Find Out The <span className="text-primary">Approximate Cost</span> of Delivery Of Your Shipment</h3>
                                    <div>
                                        <Link to="/rate-calculator" className="btn btn-primary">Calculate My Shipping</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <div className="faq-section section-padding pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-8">
                            <div className="section-title">
                                <p>If you don't know, find out</p>
                                <h2>Frequently Asked Question</h2>
                            </div>
                            <div className="accordion faqs" id="accordionFaq">
                                <div className="card">
                                    <div className="card-header" id="heading1">
                                        <h5 className="mb-0 subtitle">
                                            <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                                What is a Standard Courier Service?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse1" className="collapse" aria-labelledby="heading1" data-bs-parent="#accordionFaq">
                                        <div className="card-body">
                                            <div className="content">
                                                <p>Standard delivery time usually takes approximately 3 working days, and you also need to count additional time for pick-up and drop-off. If your delivery is international, it may take longer due to customs, harsh weather conditions, and traffic.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading2">
                                        <h5 className="mb-0 subtitle">
                                            <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                Why would I need a courier service?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse2" className="collapse" aria-labelledby="heading2" data-bs-parent="#accordionFaq">
                                        <div className="card-body">
                                            <div className="content">
                                                <p>Courier services are aware of traffic patterns and which routes are the quickest. This ensures that your delivery will make it to its destination on time. In addition, most firms offer expedited service and will ensure that your package is delivered on time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading3">
                                        <h5 className="mb-0 subtitle">
                                            <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                What does it cost for a courier?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse3" className="collapse" aria-labelledby="heading3" data-bs-parent="#accordionFaq">
                                        <div className="card-body">
                                            <div className="content">
                                                <p>A fee covering the cost of couriering documents from a shipping party to an agency, transportation provider, or other supply chain partner.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="heading4">
                                        <h5 className="mb-0 subtitle">
                                            <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                How quickly can you deliver my package?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapse4" className="collapse" aria-labelledby="heading4" data-bs-parent="#accordionFaq">
                                        <div className="card-body">
                                            <div className="content">
                                                <p>Domestic deliveries arrive in 1-3 business days depending on where your package starts and where it's going. Tracking and insurance are included, shipping boxes and envelopes are free</p>
                                            </div>
                                        </div>
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

export default Largeheavycourier;