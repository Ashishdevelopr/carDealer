import React from 'react'
import "./Faq.css"

const Faq = () => {
    return (
        <div id="faq" className='reveal faq-background'>
            <div className="px-4 py-5 text-center">
                <h1 className="faq-head mb-3">Frequently <span className=''> Asked Questions</span></h1>
                <div className="col-lg-6 mx-auto">
                    <p className="desc-text mb-4">Answers to common questions about our services and processes, helping our customers find quick solutions to their queries.</p>
                </div>
            </div>

            {/* question section */}
            <section className="mt-0 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="accordion accordion-flush" id="faqlist">
                                <div className="accordion-item questions-border">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                            What services does your car dealer platform offer?
                                        </button>
                                    </h2>
                                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Our web development process involves discovery, planning, design, development, testing, and deployment. We work closely with our clients
                                            to ensure that we understand their unique needs and goals, and we use an agile methodology to deliver custom web solutions that meet those
                                            needs. Our car dealer platform offers a wide range of services including buying and selling new and used cars, financing options, trade-ins, and vehicle maintenance and repairs.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item questions-border">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                        Do you offer financing options for car purchases?
                                        </button>
                                    </h2>
                                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body onest-medium">
                                        Absolutely. We offer financing options to help you purchase your dream car. Our financing solutions come with competitive interest rates and flexible repayment terms.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item questions-border">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                        What kind of warranties do you provide for used cars?
                                        </button>
                                    </h2>
                                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body onest-medium">
                                        All our used cars come with a comprehensive warranty that covers various mechanical and technical issues. The details of the warranty will be provided along with the listing of the used car.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item questions-border">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                            Can I get maintenance and repairs done through your platform?
                                        </button>
                                    </h2>
                                    <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body onest-medium">
                                        Yes, we have a dedicated service center where you can get maintenance and repairs done for your vehicle. Our skilled technicians use genuine parts to ensure the best quality service.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item questions-border">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed onest-medium" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                        What payment methods are accepted for car purchases?
                                        </button>
                                    </h2>
                                    <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body onest-medium">
                                        We accept various payment methods including bank transfers, credit and debit cards, and financing options. You can choose the method that works best for you.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq