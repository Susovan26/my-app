import React, { useEffect } from 'react';

function Service() {
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

  return (
    <div className="service-area gray-bg service-3 section-padding pt-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-8">
            <div className="section-title">
              <p>Popular Service With Quick Response!</p>
              <h2>Explore Our Services</h2>
            </div>
          </div>
        </div>
        
        <div className="service-item-wrap mt-30 owl-carousel">
          {/* Service Item 1 */}
          <div className="service-single wow fadeInLeft animated" data-wow-delay="100ms">
            <div className="service-img-wrap">
              <div className="service-thumb">
                <img src="assets/img/service/service-1.jpg" alt="Personal Courier" />
              </div>
              <div className="services_icon">
                <i className="flaticon-delivery-man"></i>
              </div>
            </div>
            
            <div className="service-content">
              <h4>
                <a href="#">Personal Courier</a>
              </h4>                        
              <p>
                Susovan Courier Service delivers fast, secure, and reliable parcel solutions with trusted, customer-focused service.
              </p>
              
              <a className="main-btn primary" href="#">
                Read More <i className="las la-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="service-single wow fadeInLeft animated" data-wow-delay="200ms">
            <div className="service-img-wrap">
              <div className="service-thumb">
                <img src="assets/img/service/service-2.jpg" alt="Business Courier" />
              </div>
              <div className="services_icon">
                <i className="flaticon-truck-1"></i>
              </div>
            </div>
            
            <div className="service-content">
              <h4>
                <a href="#">Business Courier</a>
              </h4>                        
              <p>
                Susovan Courier Service delivers fast, secure, and reliable parcel solutions with trusted, customer-focused service.
              </p>
              
              <a className="main-btn primary" href="#">
                Read More <i className="las la-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="service-single wow fadeInLeft animated" data-wow-delay="300ms">
            <div className="service-img-wrap">
              <div className="service-thumb">
                <img src="assets/img/service/service-3.jpg" alt="Large & Heavy Courier" />
              </div>
              <div className="services_icon">
                <i className="flaticon-pallet"></i>
              </div>
            </div>
            
            <div className="service-content">
              <h4>
                <a href="#">Large & Heavy Courier</a>
              </h4>                        
              <p>
                Susovan Courier Service delivers fast, secure, and reliable parcel solutions with trusted, customer-focused service.
              </p>
              
              <a className="main-btn primary" href="#">
                Read More <i className="las la-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="service-single wow fadeInLeft animated" data-wow-delay="400ms">
            <div className="service-img-wrap">
              <div className="service-thumb">
                <img src="assets/img/service/service-4.jpg" alt="Single Package" />
              </div>
              <div className="services_icon">
                <i className="flaticon-air-freight"></i>
              </div>
            </div>
            
            <div className="service-content">
              <h4>
                <a href="#">Single Package</a>
              </h4>                        
              <p>
                Susovan Courier Service delivers fast, secure, and reliable parcel solutions with trusted, customer-focused service.
              </p>
              
              <a className="main-btn primary" href="#">
                Read More <i className="las la-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service Item 5 */}
          <div className="service-single wow fadeInLeft animated" data-wow-delay="500ms">
            <div className="service-img-wrap">
              <div className="service-thumb">
                <img src="assets/img/service/service-5.jpg" alt="Multi Package" />
              </div>
              <div className="services_icon">
                <i className="flaticon-wholesale"></i>
              </div>
            </div>
            
            <div className="service-content">
              <h4>
                <a href="#">Multi Package</a>
              </h4>                        
              <p>
                Susovan Courier Service delivers fast, secure, and reliable parcel solutions with trusted, customer-focused service.
              </p>
              
              <a className="main-btn primary" href="#">
                Read More <i className="las la-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Service Item 6 */}
          <div className="service-single wow fadeInLeft animated" data-wow-delay="600ms">
            <div className="service-img-wrap">
              <div className="service-thumb">
                <img src="assets/img/service/service-6.jpg" alt="Part Truck Load" />
              </div>
              <div className="services_icon">
                <i className="flaticon-truck-1"></i>
              </div>
            </div>
            
            <div className="service-content">
              <h4>
                <a href="#">Part Truck Load</a>
              </h4>                        
              <p>
                Susovan Courier Service delivers fast, secure, and reliable parcel solutions with trusted, customer-focused service.
              </p>
              
              <a className="main-btn primary" href="#">
                Read More <i className="las la-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>            
      </div>
    </div>
  );
}

export default Service;