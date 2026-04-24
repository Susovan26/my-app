import React, { useState, useEffect, useRef } from 'react';

function Testimonial() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const targetNumber = 25;

  useEffect(() => {
    // Intersection Observer দিয়ে counter চালু করুন যখন visible হবে
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Owl Carousel initialization
    if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
      window.$('.testimonial-wrap-2').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        margin: 30
      });
    }

    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        window.$('.testimonial-wrap-2').trigger('destroy.owl.carousel');
      }
    };
  }, []);

  const startCounter = () => {
    const duration = 2000; // 2 seconds
    const stepTime = 20; // update every 20ms
    const steps = duration / stepTime;
    const increment = targetNumber / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  };

  return (
    <div className="testimonial-area section-padding pt-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12" ref={counterRef}>
            <div className="counter-wrap-2">
              <div className="counter">
                <div className="counter-inner">
                  <div className="counter-num">
                    <h2 className="counting">{count}</h2>
                    <span>+</span>
                  </div>
                  <div className="counter-bg">
                    <img src="assets/img/icon/courier.png" alt="counter icon" />
                  </div>
                </div>
                <div className="counter-content">
                  <p>Years of Experience in Courier Services</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 offset-lg-1 col-12">
            <div className="testimonial-wrap-2 owl-carousel">
              {/* Testimonial 1 */}
              <div className="testimonial-inner">
                <div className="testimonial-content">
                  <p>“Experia's service is reliable, timely and accurate delivery and the communication system is excellent. Also ipsum dolor sit amet consectetur adipisicing elit reiciendis labour consectetur adipisicing elit. Incidunt, consequatur.”</p>
                </div>
                <div className="testimonial-thumb">
                  <div className="testimonial-img">
                    <img src="assets/img/testimonial/1.jpg" alt="Pat Cummins" />
                  </div>
                  <div className="testimonial-meta">
                    <h6>Pat Cummins,</h6>
                    <p>Delta Logistics</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-inner">
                <div className="testimonial-content">
                  <p>“Experia's service is reliable, timely and accurate delivery and the communication system is excellent. Also ipsum dolor sit amet consectetur adipisicing elit reiciendis labour consectetur adipisicing elit. Incidunt, consequatur.”</p>
                </div>
                <div className="testimonial-thumb">
                  <div className="testimonial-img">
                    <img src="assets/img/testimonial/2.jpg" alt="Sara Fatima" />
                  </div>
                  <div className="testimonial-meta">
                    <h6>Sara Fatima,</h6>
                    <p>Alfa Textile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;