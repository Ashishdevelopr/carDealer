import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import "./Contact.css"
const Contact = () => {
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
    <div> <div id="contact">
    <div className='container mt-5 pt-4 '>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h1 className="mb-3 hover-underline-animation contact-head" >Contact Us</h1>
            </div>
        </div>
    </div>

    

    <div className="container mt-4 mb-4 ">
        <div className="row flex-lg align-items-center g-5 py-0">

            <div className="col-md-6 col-sm-12 col-lg-6 mx-auto ">
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


           
            <div className="col-md-5 col-sm-12 col-lg-5 mx-auto d-none d-md-block">

               
            <iframe  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d468.50724808513496!2d72.83345001514037!3d19.177305525658255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzM4LjIiTiA3MsKwNTAnMDEuNSJF!5e0!3m2!1sen!2sin!4v1676630831480!5m2!1sen!2sin" 
            style={{width:"400px", height:"400px", allowfullscreen:""}}></iframe>
            </div>
           

                {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-primary btn px-4 me-md-2">Know More</button>
                    <button type="button" className="btn btn-outline-secondary btn px-3 ">Get Started</button>
                </div> */}
          
        </div>
    </div>


</div></div>
  )
}

export default Contact