import React from 'react'
import "./Navbar.css"
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
    <div id="navbar"><nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> CarX <i class="fa-solid fa-car-side"></i> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li class="nav-item">
              <HashLink class="nav-link active" aria-current="page" to="/#home">Home</HashLink>
            </li>

            <li class="nav-item">
              <HashLink class="nav-link" to="/#feature">Explore</HashLink>
            </li>

            <li class="nav-item dropdown">
              <HashLink class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Listing
              </HashLink>
              <ul class="dropdown-menu">
                <li><HashLink class="dropdown-item" to="/#category">Used Cars</HashLink></li>
                <li><HashLink class="dropdown-item" to="/#category">New Cars</HashLink></li>
              </ul>
            </li>


            <li class="nav-item">
              <HashLink class="nav-link" to="/#faq">FAQ</HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="nav-link" to="/#contact">Contact</HashLink>
            </li>

          </ul>

          <ul class="navbar-nav gap-3">
            <li class="nav-item">
              <a href="tel:8928903577" className="link-dark"><i class="fa-solid fa-phone navicon-phone"></i></a>
            </li>
            <li class="nav-item">
              <li className=" "><a className="link-dark" href="https://wa.me/918928903577" target="_blank"><i class="fa-brands fa-whatsapp navicon "></i></a></li>
            </li>
          </ul>

        </div>
      </div>
    </nav></div>
  )
}

export default Navbar