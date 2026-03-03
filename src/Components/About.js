import React, { useEffect } from 'react';
function About() {
      useEffect(() => {
        // eslint-disable-next-line no-undef
        const loadScripts = () => {
          if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
            // eslint-disable-next-line no-undef
            $('.owl-carousel').owlCarousel({
              loop: true,
              margin: 30,
              //nav: true,
              dots: true,
              autoplay: true,
              autoplayTimeout: 5000,
              smartSpeed: 1000,
              responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
              },
              
            });
          }
    
         
        };
    
        setTimeout(loadScripts, 500);
    
      
      }, []);
  return(
  <>
  <div className="breadcrumb-area about-bg">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="breadcrumb-title">
                        <h1>About Us</h1>						
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    {/*<!-- Feature Section  -->*/}

    <div className="feature-area dark-bg section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-5">
                    <div className="section-title">
                        <p>Secured, Fastest & Reliable Delivery Service!</p>
                        <h2 className="text-white">
                            Since during our launch, to deliver high value package.
                        </h2>
                    </div>
                </div>
                <div className="offset-xl-1 col-xl-5 col-lg-6 offset-lg-1">
                    <div className="feature-right-content">
                        <p className="text-white">
                            Company providing its own fulfilment to a domestic depot, which is then picked up by the courier and distributed to customers, or couriers pick up packages directly from the vendor.
                        </p>
                        <p className="text-white">
                            The process of courier or parcel delivery depends on the company, contract, location and a variety of other factors. 
                        </p>                        
                    </div>
                </div>
            </div>

            <div className="feature-item-wrap">
                <div className="feature-slider owl-carousel">
                    <div className="feature-single wow fadeInLeft animated" data-wow-delay="100ms">
                        <div className="feature-icon">
                            <img src="assets/img/icon/feature/1.png" alt="" />
                        </div>
                        <div className="feature-title">
                            <h5>Free Estimate</h5>
                        </div>
                        <div className="feature-desc">
                            <p>Courier services will package according to customers needs. 
                            </p>
                        </div>
                        <a href="services.html"><i className="las la-arrow-right"></i></a>
                    </div>
                    <div className="feature-single wow fadeInLeft animated" data-wow-delay="200ms">
                        <div className="feature-icon">
                            <img src="assets/img/icon/feature/2.png" alt=""/ >
                        </div>
                        <div className="feature-title">
                            <h5>24/7 Services</h5>
                        </div>
                        <div className="feature-desc">
                            <p>
                                Shipments any day or time, even on weekends and holidays.
                            </p>
                        </div>
                        <a href="services.html"><i className="las la-arrow-right"></i></a>
                    </div>
                    <div className="feature-single wow fadeInLeft animated" data-wow-delay="300ms">
                        <div className="feature-icon">
                            <img src="assets/img/icon/feature/3.png" alt=""/ >
                        </div>
                        <div className="feature-title">
                            <h5>Flat Rate Fees</h5>
                        </div>
                        <div className="feature-desc">
                            <p>
                                Parcel Charge depends speedy delivery of flexible price. 
                            </p>
                        </div>
                        <a href="services.html"><i className="las la-arrow-right"></i></a>
                    </div>
                    <div className="feature-single wow fadeInLeft animated" data-wow-delay="400ms">
                        <div className="feature-icon">
                            <img src="assets/img/icon/feature/4.png" alt=""/ >
                        </div>
                        <div className="feature-title">
                            <h5>Fast Delivery</h5>
                        </div>
                        <div className="feature-desc">
                            <p>
                                Specialty couriers are able to deliver items faster than other services.
                            </p>
                        </div>
                        <a href="services.html"><i className="las la-arrow-right"></i></a>
                    </div>
                    <div className="feature-single wow fadeInLeft animated" data-wow-delay="200ms">
                        <div className="feature-icon">
                            <img src="assets/img/icon/feature/5.png" alt=""/ >
                        </div>
                        <div className="feature-title">
                            <h5>Secured Service</h5>
                        </div>
                        <div className="feature-desc">
                            <p>
                                Specialty couriers provide the highest level of security and tracking for packages
                            </p>
                        </div>
                        <a href="services.html"><i className="las la-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <div className="process-area bg-cover section-padding">
        <div className="container">
            <div className="row">
                <div className="offset-lg-2 col-lg-8 text-center">
                    <div className="section-title">
                        <p>Courier Services Work Frequently World Wide</p>
                        <h2>How We <b>Work</b> for <b>Customers</b></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="100ms">
                    <div className="single-process-area text-center">                        
                        <div className="process-icon">
                            <img src="assets/img/icon/process/web-Photoroom.png" alt=""/>
                        </div>
                        <h4>Apply Online</h4>
                        <p>You can apply with details in online for our services.</p>                        
                        <span className="count-big">01</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="200ms">
                    <div className="single-process-area text-center">                        
                        <div className="process-icon">
                            <img src="assets/img/icon/process/document-Photoroom.png" alt=""/>
                        </div>
                        <h4>Documentation</h4>
                        <p>Our experts check docs on submission as per policy.</p>
                        <span className="count-big">02</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="300ms">
                    <div className="single-process-area text-center">                        
                        <div className="process-icon">
                            <img src="assets/img/icon/process/call-center-Photoroom.png" alt=""/>
                        </div>
                        <h4>Processing</h4>
                        <p>After reviewing your documents we will get in touch.</p>
                        <span className="count-big">03</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="400ms">
                    <div className="single-process-area text-center">                      
                        <div className="process-icon">
                            <img src="assets/img/icon/process/package-Photoroom.png" alt=""/>
                        </div>
                        <h4>Final Destination</h4>
                        <p>You are all ready to deliver or supply your package.</p>
                        <span className="count-big">04</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default About;