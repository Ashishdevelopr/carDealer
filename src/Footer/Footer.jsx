import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footerback">
       
    <div className="container py-5  mx-auto ">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div>
            <h4 className="fw-bold footer-head">Cliffing Ventures</h4>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex fuga omnis reiciendis cumque odio amet voluptates corporis mollitia ducimus. Odio..</p>
          </div>
          <ul className="list-unstyled d-flex">
        <li className=" "><a className="link-dark" href="https://wa.me/919324280652" target="_blank"><i class="fa-brands fa-whatsapp footericon "></i></a></li>
        <li className="ms-3 "><a className="link-dark" href="https://www.instagram.com/businessbelieve/" target="_blank"><i class="fa-brands fa-instagram footericon"></i> </a></li>
        <li className="ms-3 "><a className="link-dark" href="https://www.instagram.com/businessbelieve/" target="_blank"> <i class="fa-brands fa-facebook-messenger footericon"></i></a></li>
      </ul>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
          <div className="">
            <h5 className="fw-semibold footer-head">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">Course Map</a>
              </li>
              <li>
                <a href="./signup" className="text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="fw-semibold footer-head">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/signin" className="text-decoration-none">Help & Support</a>
              </li>
              <li>
                <a href="/#FAQ" className="text-decoration-none">FAQ's</a>
              </li>
              <li>
                <a href="/#about" className="text-decoration-none">Features</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="fw-semibold footer-head">Get in Touch</h5>
            <ul className="list-unstyled list">
              <li>
                <p>Lokandwala Township, Kandivali east Mumbai 400101</p>
              </li>
              <li>
                <p> Email: <a href="mailto:ashishdevelopr@gmail.com" className="link-reset">ashishdevelopr@gmail.com</a>
                </p>
              </li>
              
              <li>
                <p> Phone: <a href="tel:9324280652" className="link-reset">9324280652</a>
                </p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div className="container">
    <div className="d-flex justify-content-between pt-1 border-top border-warning border-opacity-50">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
    </div>

    </div>
 
    </div>
  )
}

export default Footer