import React from 'react'
import './App.css'
import Card from './Card'

function FullStack() {
  const courseDetails = [
    {
      title:"7 Best Full-Stack Development Online Courses [2023]",
      image: "./fsd1.png",
      description:"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      link: "https://www.guvi.in/blog/best-full-stack-development-online-courses/"
    },
    {
      title:"The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
      image: "./fsd2.png",
      description:"‍As a full-stack developer, having the right set of tools is crucial for your success.",
      link: "https://www.guvi.in/blog/top-full-stack-developer-tools/"
    },
    {
      title:"The Ultimate Guide to Real-World Full-Stack Development Applications",
      image: "./fsd3.png",
      description:"Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can",
      link: "https://www.guvi.in/blog/top-must-know-full-stack-development-applications/"
    },
    {
      title:"Best Ways to Learn Full Stack Development in 2023",
      image: "./fsd4.png",
      description:"Full stack development is and will be a promising and in-demand career in the upcoming",
      link: "https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/"
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

export default FullStack