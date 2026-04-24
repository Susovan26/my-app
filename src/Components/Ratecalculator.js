import React from "react";
import { Link } from "react-router-dom";

function Ratecalculator() {
    return (
        <>
            {/* About Section */}
            <div className="breadcrumb-area about-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb-title">
                                <h1>Cost Of Delivery</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <section className="section-project bg-custom-light pt-5 pt-lg-80 pt-xxl-100 pb-60 pb-lg-100 pb-xxl-60">	
				<div className="max-width position-relative"/>
					
					<div className="container-fluid">
						<div className="row gx-0 align-items-center">
						
							<div className="col-lg-5 sticky-contents">								
								<div className="project-details-image">
									<img src="assets/img/about-men.png" className="img-fluid" alt="project-details-image"/>
								</div>
							</div>
							 <div className="col-lg-7">
								<div className="quotation-wrap shadow wow fadeInUp animated" data-wow-delay="200ms">
									<div className="quotation-inner">
										<h2 className="quotation-heading pb-30">Calculate the <span className="text-primary">Cost</span> Of Delivery</h2>
										<p className="quotation-desc"></p>
										<form className="contactForm" method="post" action="https://capricorn-theme.com/html/xperia/assets/php/contact.php"
											novalidate="novalidate">
											<div className="row">
												<div className="col-12 col-md-6">
													<label className="form-label">Name
													</label>
													<input className="form-control" type="text" placeholder="Name" required="" />
												</div>
												<div className="col-12 col-md-6">
													<label className="form-label">Company Name
													</label>
													<input className="form-control" type="text" placeholder="Compnay Name"
														required="" />
												</div>
												<div className="col-12 col-md-6">
													<label className="form-label">Contact Number
													</label>
													<input className="form-control" type="number" placeholder="Contact Number"
														required="" />
												</div>
												<div className="col-12 col-md-6">
													<label className="form-label">E-mail
													</label>
													<input className="form-control" type="email" placeholder="E-mail" required="" />
												</div>
												<div className="col-12 col-md-6">
													<label className="form-label">Service Type</label>
													<select className="form-control">
														<option>Standard Courier</option>
														<option>Express Courier</option>
														<option>Over Night Courier</option>
														<option>Pallet Courier</option>
														<option>International Courier</option>
														<option>Warehousing</option>
													</select>
													<div className="nice-select form-control">
														<span className="current">Standard Courier</span>
														<ul className="list">
															<li className="option">
																Standard Courier
															</li>
															<li className="option">
																Express Courier
															</li>
															<li className="option">
																Over Night Courier
															</li>
															<li className="option">
																Pallet Courier
															</li>
															<li className="option">
																International Courier
															</li>
															<li className="option">
																Warehousing
															</li>
														</ul>
													</div>
												</div>
												<div className="col-12 col-md-6">
													<label className="form-label">Freight Type</label>
													<select className="form-control">
														<option>Air Freight</option>
														<option>Sea Freight</option>
														<option>Ground Freight</option>
													</select>
													<div className="nice-select form-control">
														<span className="current">Air Freight</span>
														<ul className="list">
															<li className="option">
																Air Freight
															</li>
															<li className="option">
																Sea Freight
															</li>
															<li className="option">
																Ground Freight
															</li>
														</ul>
													</div>
												</div>

												<div className="col-12 col-md-6">
													<label className="form-label">Pickup Date
													</label>
													<input type="date" required="" />
												</div>

												<div className="col-12 col-md-6">
													<label className="form-label">Delivery Date
													</label>
													<input type="date" required="" />
												</div>

												<div className="col-12 col-md-6">
													<label className="form-label">Dimensions
													</label>
													<input className="form-control" type="text" placeholder="20 sft" required=""/>
												</div>

												<div className="col-12 col-md-6">
													<label className="form-label">Weight
													</label>
													<input className="form-control" type="text" placeholder="2.5 KG" required=""/>
												</div>

												<div className="col-12">
													<button type="submit" className="main-btn primary shadow btn btn-primary w-100">submit request</button>
												</div>
												
											</div>
										</form>
									</div>
								</div>
							</div>

						</div>
				
				</div>		
				
			</section>
         
        </>
    );
}

export default Ratecalculator;