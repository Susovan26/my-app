import React from "react";
import { Link } from "react-router-dom";

function Track() {
    return (
        <>
            {/* About Section */}
            <div className="breadcrumb-area about-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-title">
                                <h1>Track Shipments, With Ease</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       <section className="section-tracking bg-custom-light pt-5 pt-lg-80 pt-xxl-100 pb-60 pb-lg-100 pb-xxl-120">
				<div className="container">
					<div className="row g-40 gy-lg-0">
						<div className="col-lg-7 col-xl-8">
							<div className="tracking-inner p-4 p-lg-40 p-xxl-60 d-flex flex-column gap-30 gap-lg-40 shadow wow fadeIn" data-wow-duration="1.8s">
								<div>
									<h5 className="mb-10 fw-medium">Delivered</h5>
									<p className="fs-base fw-light mb-0">May 20 at 4:00 pm</p>
								</div>
								<div>
									<h6 className="fw-medium mb-20">Updated: Today at 9:00 am</h6>
									<div className="progress-items d-flex flex-column gap-20">												
										<div className="progress progress-1 position-relative">
											<div className="progress-bar progress-bar-1"  style={{ width: "100%" }}>										
											</div>
											<span className="progress-bar-circle"></span>
										</div>
										<div className="d-flex justify-content-between">
											<span className="d-flex flex-column gap-3">
												<span className="fs-base fw-medium">Received by Logistip</span>
												<span className="fs-base fw-light">May 17</span>
											</span>

											<span className="d-flex flex-column gap-3">
												<span className="fs-base fw-medium">Delivered</span>
												<span className="fs-base fw-light">May 20</span>
											</span>											
										</div>
									</div>
									
								</div>
								
								<h5 className="mb-0 fw-medium">Latest Updates</h5>
								<div className="tracing-items-border d-flex justify-content-between pb-30">
									<div className="d-flex flex-column gap-20">
										<p className="fs-base fw-medium mb-0">Date</p>
										<p className="small fw-normal mb-0">May 20</p>
									</div>
									<div className="d-flex flex-column gap-20">
										<p className="fs-base fw-medium mb-0">Time</p>
										<p className="small fw-normal mb-0">4:00 pm</p>
									</div>
									<div className="d-flex flex-column gap-20">
										<p className="fs-base fw-medium mb-0">Progress</p>
										<div className="d-flex flex-column gap-1">
											<p className="small fw-normal mb-0">Delivered</p>
											<p className="small fw-normal mb-0">Davidson, UK</p>
										</div>										
									</div>
								</div>
								
								<div>
									<a href="tracking.html" className="main-btn primary d-none d-md-block mt-30">Track another item</a>
								</div>
							</div>
							
						</div>
						
						<div className="col-lg-5 col-xl-4">
							<div className="tracking-inner p-20 p-lg-30 d-flex flex-column gap-3 gap-lg-20 shadow sticky-contents wow fadeIn" data-wow-duration="1.8s">								
								<h5 className="mb-0">Delivery information</h5>								
								<div className="d-flex flex-column gap-10 tracing-items-border pb-20">
									<span className="fs-base fw-medium">Sender: <span className="opacity-75">FSDEZR</span></span>
									<span className="fs-base fw-medium">Your Shipment is</span>
								</div>		
								<div className="tracing-items-border pb-20">
									<a href="#" className="btn btn-link-style-2 text-decoration-none gap-2">
  Service information
  <span className="chevron-down-icon">
    <svg width="8" height="4">
      <use href="#chevron-down-icon"></use>
    </svg>
  </span>
</a>
								</div>
								<div>
									<a href="contact-us.html" className="main-btn primary d-none d-md-block mt-30">See more support</a>
								</div>
							</div>
							
						</div>
						
					</div>
					
				</div>
				
			</section>    
                      
        </>
    );
}

export default Track;