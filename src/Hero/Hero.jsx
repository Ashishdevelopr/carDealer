import React from 'react'
import "./Hero.css"
import { HashLink } from 'react-router-hash-link'
const Hero = () => {
	return (
		<>
			<div class="px-4  text-center back-img" id="home">

				<h1 class="display-5 fw-bold ">Say hello to best car <br></br> dealer platform</h1>
				<div class="col-lg-6 mx-auto">
					<p class=" mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
					<div>
						<div class="row justify-content-space-evenly align-items-center">
							<div class="col-lg-4 col-sm-6 ">
								<div class="selected-box">
									<div class="dropdown bootstrap-select form-control">
										<label className='me-5'>Company</label>
										<select class="form-select">
											<option>Ford</option>
											<option>BMW </option>
											<option>Hyundai </option>
											<option>Nissan </option>
										</select>

									</div>
								</div>
							</div>
							<div class="col-lg-4 col-sm-6">
								<div class="selected-box">
									<div class="dropdown bootstrap-select form-control">
										<label className='me-5'>Class</label>
										<select class="form-select">
											
											<option>2010</option>
											<option>2011</option>
											<option>2012</option>
										</select>
									</div>
								</div>
							</div>
						
							<div class="col-md-3 col-sm-6 ">
								<HashLink type="button" to="/#category" class="btn btn-primary btn-lg px-4 gap-3">Serach</HashLink>
							</div>

						</div>
					</div>



				</div>
			</div>







		</>
	)
}

export default Hero