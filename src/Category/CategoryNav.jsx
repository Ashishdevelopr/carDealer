import { useState } from "react"
import React from 'react'
import "./Category.css"
const CategoryNav = () => {
    const [activeCategory, setActiveCategory] = useState('old')

    const componentStyles = {
        "--bs-nav-link-color": "var(--bs-white)",
        "--bs-nav-pills-link-active-color": "var( --main-color)",
        "--bs-nav-pills-link-active-bg": "var(--bs-white)",
    };

    const allCars = [
        {
            type: "old",
            vehicles: [
                { company: "Ford", model: "Model T", price: 1500, img:"https://creativelayers.net/themes/voiture-html/images/listing/8.jpg" },
                { company: "Volkswagen", model: "Beetle", price: 2500, img:"https://creativelayers.net/themes/voiture-html/images/listing/7.jpg"},
                { company: "Chevrolet", model: "Bel Air", price: 35000, img:"https://creativelayers.net/themes/voiture-html/images/listing/4.jpg" },
                { company: "Cadillac", model: "DeVille", price: 45000, img:"https://creativelayers.net/themes/voiture-html/images/listing/2.jpg" },
                { company: "Plymouth", model: "Barracuda", price: 28000, img:"https://creativelayers.net/themes/voiture-html/images/listing/1.jpg" },
                { company: "Dodge", model: "Charger", price: 40000, img:"https://creativelayers.net/themes/voiture-html/images/listing/5.jpg" },
            ]
        },
        {
            type: "new",
            vehicles: [
                { company: "Toyota", model: "Camry", price: 25000, img:"https://creativelayers.net/themes/voiture-html/images/listing/2.jpg" },
                { company: "Honda", model: "Civic", price: 22000, img:"https://creativelayers.net/themes/voiture-html/images/listing/5.jpg" },
                { company: "Ford", model: "Mustang", price: 40000, img:"https://creativelayers.net/themes/voiture-html/images/listing/1.jpg" },
                { company: "Chevrolet", model: "Silverado", price: 35000, img:"https://creativelayers.net/themes/voiture-html/images/listing/3.jpg" },
                { company: "Jeep", model: "Wrangler", price: 28000, img:"https://creativelayers.net/themes/voiture-html/images/listing/6.jpg" },
                { company: "Tesla", model: "Model 3", price: 50000, img:"https://creativelayers.net/themes/voiture-html/images/listing/7.jpg" },
            ]
        },
        {
            type: "all",
            vehicles: [
                { company: "Toyota", model: "Camry", price: 25000, img:"https://creativelayers.net/themes/voiture-html/images/listing/2.jpg" },
                { company: "Honda", model: "Civic", price: 22000, img:"https://creativelayers.net/themes/voiture-html/images/listing/5.jpg" },
                { company: "Chevrolet", model: "Silverado", price: 35000, img:"https://creativelayers.net/themes/voiture-html/images/listing/3.jpg" },
                { company: "Jeep", model: "Wrangler", price: 28000, img:"https://creativelayers.net/themes/voiture-html/images/listing/6.jpg" },
                { company: "Tesla", model: "Model 3", price: 50000, img:"https://creativelayers.net/themes/voiture-html/images/listing/7.jpg" },
                { company: "Honda", model: "Civic", price: 22000, img:"https://creativelayers.net/themes/voiture-html/images/listing/5.jpg" },
            ]
        },
    ];

    return (
        <>
            <div class="lg-container px-5  pt-5 mx-auto" id="category">
                <div class="row mb-4">
                    <div class="col-md-12 mx-auto my-4 text-center">
                        <h2 class="fw-semibold fs-2 mb-3">Featured Listings</h2>

                        <ul class=" nav nav-pills nav-fill  p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ ...componentStyles }}>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true"  onClick={() => { setActiveCategory('all') }}>All Cars</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" onClick={() => { setActiveCategory('new') }}>New Cars</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" onClick={() => { setActiveCategory('old') }}>Used Cars</button>
                            </li>
                        </ul>



                    </div>
                </div>
            </div>



            <div className="lg-container px-5  mx-auto">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {allCars
      .filter(category => category.type === activeCategory)
      .map(category =>
        category.vehicles.map(vehicle => (
          <div className="col" key={vehicle.model}>
            <div className="card">
              <img
                src={vehicle.img}
                className="card-img-top mb-3"
                alt=""
              />
              <div className="work-card-body px-1">
                <h5 className="card-title fw-semibold">
                  {vehicle.company}- <span className="card-model">{vehicle.model}</span>
                </h5>
                <h6 className=" card-model">
                  
                </h6>
                <p className=" card-model">
                  ${vehicle.price}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
  </div>
</div>







        </>
    )
}

export default CategoryNav