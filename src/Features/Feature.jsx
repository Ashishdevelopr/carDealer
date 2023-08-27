import React from 'react'
import "./Feature.css"
const Feature = () => {
    return (


        <>


            <div class="lg-container px-5 pt-5 mx-auto">
                <div class="row mb-4">
                    <div class="col-md-10 mx-auto text-center">
                <h2 class="fw-semibold fs-2">Why Choose Us ?</h2>
                </div>
              </div>
              </div>


            <div>
                <div class="row g-2  py-4 px-5 row-cols-1 row-cols-lg-3">
                    <div class="feature col">
                        
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                        <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 class="fs-4 fw-bold text-uppercase">Secure</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>

                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                        <i class="fa-solid fa-shapes"></i>
                        </div>
                        <h3 class="fs-4 fw-bold text-uppercase">Update</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>

                    <div class="feature col">
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                        
                        <i class="fa-solid fa-star"></i>
                        </div>
                        <h3 class="fs-4 fw-bold text-uppercase">Exculsive</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature