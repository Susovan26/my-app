import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Franchiselogin() {
    const [activeTab, setActiveTab] = useState("login");
    const loginRef = useRef(null);
    const registerRef = useRef(null);
    const wrapperRef = useRef(null);
const [form, setForm] = useState({
    owner_name: "",
    mobile: "",
    alternate_mobile: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pin_code: ""
});

const [msg, setMsg] = useState("");

const handleChange = (e) => {

    setForm({
        ...form,
        [e.target.name]: e.target.value
    });

};

const handleSubmit = async (e) => {

    e.preventDefault();

    //const res = await fetch("http://localhost:5000/franchiseregister",
    const res = await fetch("api.susovanenterprise.com/franchiseregister",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }
    );

    const data = await res.text();

    setMsg(data);

    // FORM RESET
    setForm({
        owner_name: "",
        mobile: "",
        alternate_mobile: "",
        email: "",
        address: "",
        state: "",
        district: "",
        pin_code: ""
    });

};
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
  {msg && <p style={{ color: "green" }}>{msg}</p>}
                                                   <form onSubmit={handleSubmit} className="contactForm">

    <div className="row">

        <div className="col-12">
            <label>Owner Name</label>

            <input
                type="text"
                name="owner_name"
                className="form-control"
                placeholder="Enter Owner Name"
                value={form.owner_name}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-12">
            <label>Mobile</label>

            <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Enter Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-12">
            <label>Alternative Mobile</label>

            <input
                type="text"
                name="alternate_mobile"
                className="form-control"
                placeholder="Enter Alternative Mobile Number"
                value={form.alternate_mobile}
                onChange={handleChange}
            />
        </div>

        <div className="col-12">
            <label>Email</label>

            <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-12">
            <label>Address</label>

            <textarea
                name="address"
                className="form-control"
                placeholder="Enter Address"
                rows="3"
                value={form.address}
                onChange={handleChange}
                required
            ></textarea>
        </div>

        <div className="col-12">
            <label>State</label>

            <input
                type="text"
                name="state"
                className="form-control"
                placeholder="Enter State"
                value={form.state}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-12">
            <label>District</label>

            <input
                type="text"
                name="district"
                className="form-control"
                placeholder="Enter District"
                value={form.district}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-12">
            <label>Pin Code</label>

            <input
                type="text"
                name="pin_code"
                className="form-control"
                placeholder="Enter Pin Code"
                value={form.pin_code}
                onChange={handleChange}
                required
            />
        </div>

        <div className="col-12 mt-3">

            <button type="submit" className="main-btn primary">
                Register
            </button>

        </div>

        <div className="col-12 mt-3">

            <p>{msg}</p>

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