import React from 'react'
import "./Hero.css"
const Hero = () => {
	return (
		<>
			<div class="px-4  text-center back-img" id="home">

				<h1 class="display-5 fw-bold ">Say hello to best car <br></br> dealer platform</h1>
				<div class="col-lg-6 mx-auto">
					<p class=" mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<div>
						<div class="row justify-content-space-evenly align-items-center">
							<div class="col-lg-4 col-sm-6 ">
								<div class="selected-box">
									<div class="dropdown bootstrap-select form-control">
										<label className='me-5'>Make</label>
										<select class="form-select">
											<option>Make </option>
											<option>BMW</option>
											<option>Honda </option>
											<option>Hyundai </option>
											<option>Nissan </option>
											<option>Mercedes Benz </option>
										</select>

									</div>
								</div>
							</div>
							<div class="col-lg-4 col-sm-6">
								<div class="selected-box">
									<div class="dropdown bootstrap-select form-control">
										<label className='me-5'>Model</label>
										<select class="form-select">
											<option>Class</option>
											<option>2010</option>
											<option>2011</option>
											<option>2012</option>
										</select>
									</div>
								</div>
							</div>
							{/* <div class="col-lg-4 col-sm-6">
								<div class="selected-box">
									<div class="dropdown bootstrap-select form-control"><select class="form-control">
										<option>Model</option>
										<option>3-Series</option>
										<option>Carrera</option>
										<option>GT-R</option>
										<option>Cayenne</option>
										<option>Mazda6</option>
										<option>Macan</option>
									</select>
								</div>
                                </div>
							</div> */}
							<div class="col-md-3 col-sm-6 ">
								<button type="button" class="btn btn-primary btn-lg px-4 gap-3">Serach</button>
							</div>

						</div>
					</div>



				</div>
			</div>







		</>
	)
}

export default Hero