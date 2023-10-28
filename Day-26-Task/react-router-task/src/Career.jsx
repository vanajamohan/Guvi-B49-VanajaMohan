import React from 'react'
import './App.css'
import Card from './Card'

function Career() {
  const courseDetails = [
    {
      title:"Top Product-Based Companies for Digital Marketers",
      image: "./c2.png",
      description:"Selecting the right launchpad for a successful career in digital marketing isn’t just about joining",
      link: "https://www.guvi.in/blog/product-based-companies-for-digital-marketers/"
    },
    {
      title:"Best Product-based Companies for Motion Graphic Designing in 2023",
      image: "./c1.png",
      description:"Motion graphic designers are the unsung heroes of any company as their designs, and animations",
      link: "https://www.guvi.in/blog/product-based-companies-for-motion-graphic-designing/"
    }
    
  ]


  return (
    <div>

<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

      {courseDetails.map((courseDetails) => <Card courseDetails={courseDetails} />)}
      </div>
            </div>
        </section>
</div>)
}

export default Career