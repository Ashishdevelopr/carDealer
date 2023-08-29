import React,{useRef} from 'react'
import "./Desc.css"
import Navbar from '../Navbar/Navbar';
import Mininav from './Mininav';
import Footer from '../Footer/Footer';

const Desc = () => {


    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tiud935', 'template_ijv216o', form.current, 'nUyvZitPzpP2J643O')
            .then((result) => {
                alert("send successfully");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <>
           <Mininav/>
            <div class="container col-xxl-8 px-3  py-5">
                <div class="row flex-lg-row align-items-center g-5 ">

                    <div class="col-12 col-sm-12 col-lg-6 ">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade ">
                            <div class="carousel-inner rounded-5 shadow-lg ">
                                <div class="carousel-item active">
                                    <img src="https://creativelayers.net/themes/voiture-html/images/listing/lsp1-v1.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://creativelayers.net/themes/voiture-html/images/listing/lsp1-v3.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://creativelayers.net/themes/voiture-html/images/listing/lsp1-v4.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            SMART GT AA-211
                        </h1>
                        <p class="fw-light text-uppercase ls-2">Sports Car</p>
                        <p class="fw-normal">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>

                        <div className=' d-flex '>
                            <p className='me-auto rounded-4 p-2 bg-light fw-semibold'>Automatic</p>
                            <p className='me-auto rounded-4 p-2 bg-light fw-semibold'>Electric</p>
                            <p className='me-auto rounded-4 p-2 bg-light fw-semibold'>2 Person</p>
                        </div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-md px-3 py-2 me-md-2">$2,000</button>
                            <button type="button" class="btn btn-outline-secondary btn-md py-2 px-3">
                            <a href="tel:8928903577" className="link-dark text-decoration-none">Contact Us</a>

                                </button>
                        </div>
                    </div>

                </div>

                <div class="row py-5">
                    <div class="col-md-8 col-sm-12">
                        <h6 class=" fw-normal fs-5">Description</h6>
                        <p class="fs-6 lh-2">
                            The all-new Volvo XC60 is a terrific luxury compact SUV. It's been fully redesigned for 2017 and features improvements across the board. These changes bump the vehicle from its previous midpack standing; it now resides with some of the best in the class. Some of the most notable improvements include a state-of-the-art infotainment system, more legroom for rear-seat riders, and peppy engine choices.<br></br><br></br>
                            
                            Occupying over 8,000 square feet, perched over 1,100 feet in the air with absolutely breathtaking panoramic 360-degree views of all of New York City and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely reimagined by one of the most sought-after design houses in London and represents an utterly unique opportunity to own a globally significant property.<br></br><br></br>

                            The Amrutha Lounge means port in the Turkish language, however the restaurant opens its doors to all aspects of the Mediterranean kitchen. The kitchen will be mostly focused on Mediterranean food; the owners of the restaurant are young professional chefs who can bring new, exciting tastes to Angel, Islington which will show through in the quality of food they prepare.ent.</p>
                    </div>
                    <div class="col-md-4 col-sm-12">
                    <h2 class=" fw-semibold fs-2">Contact Us</h2>
  
                <form ref={form} onSubmit={sendEmail}>
            <section className='form-section'>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="John Hunt" required name="user_name" />
                        <label for="floatingInput">Full name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required name="user_email" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" maxLength={10} placeholder="+91 8905689758" name="user_phone" required />
                        <label for="floatingPassword">Phone number</label>
                    </div>

                    <div class="form-floating mb-3">
                    <textarea class="form-control" id="validationTextarea floatingInput" row="4"required name="user_message" style={{maxHeight:"200px"}}></textarea>
                        <label for="floatingInput">Message</label>
                    </div>

                    <button class="btn btn-primary px-3 py-2 d-grid btn-lg col-12 mx-auto" type="submit">Submit form</button>
                </section>  
                </form>                  
             

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Desc