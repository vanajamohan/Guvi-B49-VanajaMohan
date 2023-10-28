import React from 'react'
import './App.css'
import Card from './Card'

function CyberSecurity() {
  const courseDetails = [
    {
      title:"What Is Hacking? Types of Hacking & More",
      image: "./cs1.png",
      description:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      link: "https://www.guvi.in/blog/what-is-hacking/"
    },
    {
      title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      image: "./cs2.png",
      description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      link: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/"
    },
    {
      title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      image: "./cs3.gif",
      description:"Look around today, you will witness that we are more reliant on technology and devices",
      link: "https://www.guvi.in/blog/what-is-cybersecurity/"
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

export default CyberSecurity