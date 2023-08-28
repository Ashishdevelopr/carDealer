import React from 'react'
import "./Footer.css"
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footerback">
       
    <div className="container py-5  mx-auto ">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div>
          <HashLink class="navbar-brand fw-bold footer-head" to="/#navbar"> CarX <i class="fa-solid fa-car-side"></i> </HashLink>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex fuga omnis reiciendis cumque odio amet voluptates corporis mollitia ducimus. Odio..</p>
          </div>
          <ul className="list-unstyled d-flex">
        <li className=" "><a className="link-dark" href="https://wa.me/918928903577" target="_blank"><i class="fa-brands fa-whatsapp footericon "></i></a></li>
        <li className="ms-3 "><a className="link-dark" href="https://www.instagram.com/businessbelieve/" target="_blank"><i class="fa-brands fa-instagram footericon"></i> </a></li>
        <li className="ms-3 "><a className="link-dark" href="https://www.instagram.com/businessbelieve/" target="_blank"> <i class="fa-brands fa-facebook-messenger footericon"></i></a></li>
      </ul>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
          <div className="">
            <h5 className="fw-semibold footer-head">Company</h5>
            <ul className="list-unstyled">
              <li>
                <HashLink to="/#navbar" className="text-decoration-none">Home</HashLink>
              </li>
              <li>
                <HashLink to="/#feature" className="text-decoration-none">Features</HashLink>
              </li>
              <li>
                <HashLink to="/#category" className="text-decoration-none">Used Cars</HashLink>
              </li>
              <li>
                <HashLink to="/#category" className="text-decoration-none">New Cars</HashLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="fw-semibold footer-head">Support</h5>
            <ul className="list-unstyled">
              <li>
                <HashLink to="/#navbar" className="text-decoration-none">Help & Support</HashLink>
              </li>
              <li>
                <HashLink to="/#faq" className="text-decoration-none">FAQ's</HashLink>
              </li>
              <li>
                <HashLink to="/#contact" className="text-decoration-none">Contact</HashLink>
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
                <p> Email: <a href="mailto:vikasyadav45901@gmail.com" className="link-reset">vikasyadav45901@gmail.com</a>
                </p>
              </li>
              
              <li>
                <p> Phone: <a href="tel:8928923577" className="link-reset">8928903577</a>
                </p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div className="container">
    <div className="d-flex justify-content-between pt-1 border-top border-primary border-opacity-50">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
    </div>

    </div>
 
    </div>
  )
}

export default Footer