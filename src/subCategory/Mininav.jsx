import React from 'react'
import "../Navbar/Navbar.css"
import { HashLink } from 'react-router-hash-link'
const Mininav = () => {
  return (
    <div>

<div id=""><nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <HashLink class="navbar-brand" to="/#navbar"> CarX <i class="fa-solid fa-car-side"></i> </HashLink>

          

          <ul class="navbar-nav gap-4 flex-row">
            <li class="nav-item">
              <a href="tel:8928903577" className="link-dark"><i class="fa-solid fa-phone navicon-phone"></i></a>
            </li>
            <li class="nav-item">
              <li className=" "><a className="link-dark" href="https://wa.me/918928903577" target="_blank"><i class="fa-brands fa-whatsapp navicon "></i></a></li>
            </li>
          </ul>

        </div>
    
    </nav>
    
    </div>
    </div>
  )
}

export default Mininav