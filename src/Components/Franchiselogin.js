import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Franchiselogin() {

    const [activeTab, setActiveTab] = useState("login");

    const loginRef = useRef(null);
    const registerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (activeTab === "login" && loginRef.current) {
            wrapperRef.current.style.height = `${loginRef.current.offsetHeight}px`;
        } else if (activeTab === "register" && registerRef.current) {
            wrapperRef.current.style.height = `${registerRef.current.offsetHeight}px`;
        }
    }, [activeTab]);

    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb-area about-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-title">
                                <h1>Franchise Login</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quotation-page section-padding">
                <div className="container">
                    <div className="row">

                        {/* LEFT CONTENT */}
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
                                        more sustainable future.
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

                        {/* RIGHT LOGIN CARD */}
                        <div className="col-xl-6 col-lg-6 col-12 offset-xl-1">
                            <div className="quotation-wrap wow fadeInUp animated">
                                <div className="quotation-inner">

                                    <div className="flex justify-center items-center bg-gray-50">
                                        <div className="relative w-96 bg-white ring-8 ring-gray-100 border border-gray-200 rounded-xl overflow-hidden">

                                            {/* Tabs */}
                                           <div className="flex border-b">

<button id="tab-login" className="flex-1 text-center font-medium border-b border-blue-500 text-blue-500"
onClick={() => setActiveTab("login")}

>
Login
</button>

<button id="tab-register" className="flex-1 text-center font-medium border-b hover:border-gray-300"
onClick={() => setActiveTab("register")}

>
Register
</button>

</div>
                                            {/* Form Wrapper */}
                                            <div
                                                ref={wrapperRef}
                                                className="transition-all duration-500 ease-in-out"
                                            >

                                                {/* Login Form */}
                                                <div
                                                    ref={loginRef}
                                                    className={`space-y-4 p-10 quotationinner ${activeTab !== "login" ? "hidden" : ""
                                                        }`}
                                                >

                                                    <form className="contactForm">

                                                        <div className="row">

                                                            <div className="col-12">
                                                                <label>Email</label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="Enter Email"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <label>Password</label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    placeholder="Enter Password"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <button className="main-btn primary">
                                                                    Login
                                                                </button>
                                                            </div>

                                                        </div>

                                                    </form>

                                                </div>

                                                {/* Register Form */}
                                                <div
                                                    ref={registerRef}
                                                    className={`space-y-4 p-10 quotationinner ${activeTab !== "register" ? "hidden" : ""
                                                        }`}
                                                >

                                                    <form className="contactForm">

                                                        <div className="row">

                                                            <div className="col-12">
                                                                <label>Email</label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    placeholder="Enter Email"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <label>Password</label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    placeholder="Enter Password"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <label>Confirm Password</label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    placeholder="Confirm Password"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="col-12">
                                                                <button className="main-btn primary">
                                                                    Register
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

                    </div>
                </div>
            </div>
        </>
    );
}

export default Franchiselogin;