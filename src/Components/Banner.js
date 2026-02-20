import React, { useEffect } from "react";

function Banner() {
  useEffect(() => {
    // Banner slider initialization for Owl Carousel
    if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
      window.$('.homepage-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        navText: [
          '<i class="las la-angle-left"></i>',
          '<i class="las la-angle-right"></i>'
        ]
      });
    }

    // WOW.js initialization
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        window.$('.homepage-slides').trigger('destroy.owl.carousel');
      }
    };
  }, []);

  return (
    <>
      <div className="homepage-slides owl-carousel">
        {/* First Slide */}
        <div className="single-slide-item hero-area-bg-1">
          <div className="overlay-1"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="hero-area-content">
                  <div className="section-title">
                    <h1>Courier Delivery Service</h1>
                    <p>Experia is a household name for having been the pioneer of Courier and Parcel
                      Services in the country from the Corporate Clients to the average person.</p>
                  </div>
                  <a href="services.html" className="main-btn primary">
                    Ship Now <i className="las la-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 text-lg-end">
                <div className="info-content">
                  <div className="info-content-icon">
                    <img src="assets/img/icon/info/1.png" alt="" />
                  </div>
                  <div className="info-title">
                    <h5>Track your Shipment</h5>
                  </div>
                  <div className="info-desc subscribeform subscribe-form">
                    <form action="">
                      <input type="text" placeholder="Track Your ID" />
                      <button type="submit">
                        <i className="las la-truck"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="single-slide-item hero-area-bg-2">
          <div className="overlay-1"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="hero-area-content">
                  <div className="section-title">
                    <h1>Parcel Deliver in Sustainable</h1>
                    <p>Experia is a household name for having been the pioneer of Courier and Parcel
                      Services in the country from the Corporate Clients to the average person.</p>
                  </div>
                  <a href="services.html" className="main-btn primary">
                    Ship Now <i className="las la-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 text-lg-end">
                <div className="info-content">
                  <div className="info-content-icon">
                    <img src="assets/img/icon/info/1.png" alt="" />
                  </div>
                  <div className="info-title">
                    <h5>Track your Shipment</h5>
                  </div>
                  <div className="info-desc subscribeform subscribe-form">
                    <form action="">
                      <input type="text" placeholder="Track Your ID" />
                      <button type="submit">
                        <i className="las la-truck"></i>
                      </button>
                    </form>
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

export default Banner;