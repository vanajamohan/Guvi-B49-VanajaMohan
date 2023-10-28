import React from 'react'
import './App.css'
import Card from './Card'

function DataScience() {
  const courseDetails = [
    {
      title:"Top Product-Based Companies for Data Scientists in 2023",
      image: "./ds1.png",
      description:"We all know about the kind of buzz surrounding data science right now, it is",
      link: "https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/"
    },
    {
      title:"Useful Python Libraries & Tools for Data Science Beginners",
      image: "./ds2.png",
      description:"In a world filled with information, knowing how to understand and use data is super",
      link: "https://www.guvi.in/blog/useful-python-libraries-tools-for-data-science/"
    },
    {
      title:"Extraordinary Data Science Projects for Beginners As Well as Veterans",
      image: "./ds3.png",
      description:"As the demand for data and the people that can conquer it, i.e. Data Scientists",
      link: "https://www.guvi.in/blog/data-science-projects/"
    },
    {
      title:"Future of Data Science and How You Can Thrive With It",
      image: "./ds4.png",
      description:"‍ Data Science has emerged as a revolutionary field in the technology world, transforming the",
      link: "https://www.guvi.in/blog/the-future-of-data-science/"
    },
    {
      title:"10 Best Data Science Online Courses for Beginners | 2023",
      image: "./ds5.png",
      description:"In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
      link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/"
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

export default DataScience