<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
});
const [msg, setMsg] = useState(""); // 👈 এইটা add করুন
const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};
<<<<<<< HEAD
const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://api.susovanenterprise.com/contact", {
=======

const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/contact", {
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    });
<<<<<<< HEAD
=======

>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
    const data = await res.text();
    setMsg(data); // 👈 backend message show

            // form reset
            setForm({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });

        
};
<<<<<<< HEAD
=======
=======
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
>>>>>>> 121ffffe762644bc48958f7c0098b257379ac59f
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
                    {/* <p>Pleas put up a topic below reated to your inquiry. If you dont find what you need fill out our contract form. For all enquiries please mail us using the below</p> */}
                {msg && <p style={{ color: "green" }}>{msg}</p>}
                    <div className="contact_form">
                        <form onSubmit={handleSubmit} className="comment-one_form contact-form-validated" novalidate="novalidate">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div>
                                        <input type="text"  name="name"placeholder="Your Name"value={form.name} onChange={handleChange}/>
<<<<<<< HEAD
=======
=======
                    <p>Pleas put up a topic below reated to your inquiry. If you dont find what you need fill out our contract form. For all enquiries please mail us using the below</p>
                    <div className="contact_form">
                        <form action="https://capricorn-theme.com/html/xperia/assets/inc/sendemail.php" className="comment-one_form contact-form-validated" novalidate="novalidate">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div>
                                        <input type="text" placeholder="Your Name" name="name"/>
>>>>>>> 121ffffe762644bc48958f7c0098b257379ac59f
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div>
<<<<<<< HEAD
                                        <input type="email" placeholder="Email Address" name="email" value={form.email} onChange={handleChange}/>
=======
<<<<<<< HEAD
                                        <input type="email" placeholder="Email Address" name="email" value={form.email} onChange={handleChange}/>
=======
                                        <input type="email" placeholder="Email Address" name="email"/>
>>>>>>> 121ffffe762644bc48958f7c0098b257379ac59f
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div>
<<<<<<< HEAD
                                        <input type="text" placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange}/>
=======
<<<<<<< HEAD
                                        <input type="text" placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange}/>
=======
                                        <input type="text" placeholder="Phone Number" name="phone"/>
>>>>>>> 121ffffe762644bc48958f7c0098b257379ac59f
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div>
<<<<<<< HEAD
                                        <textarea name="message" placeholder="Write a Message" value={form.message} onChange={handleChange}></textarea>
                                    </div>
                                    <button className="main-btn primary" type="submit">Send Message<i className="las la-arrow-right"></i></button>
=======
<<<<<<< HEAD
                                        <textarea name="message" placeholder="Write a Message" value={form.message} onChange={handleChange}></textarea>
                                    </div>
                                    <button className="main-btn primary" type="submit">Send Message<i className="las la-arrow-right"></i></button>
=======
                                        <textarea name="message" placeholder="Write a Message"></textarea>
                                    </div>
                                    <a href="#" className="main-btn primary">Send Message<i className="las la-arrow-right"></i></a>
>>>>>>> 121ffffe762644bc48958f7c0098b257379ac59f
>>>>>>> ece765c7d942f41e91fd6ea79f36028611d68de5
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