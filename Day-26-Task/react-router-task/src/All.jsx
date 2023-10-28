import React from 'react'
import './App.css'
import Card from './Card'

function All() {


  
  const courseDetails = [
    {
      title:"Best Cloud Computing Books That You Shouldn’t Miss in 2023",
      image: "./all1.png",
      description:"No matter how much technology evolves or how digital the world gets, reading books can",
      link: "https://www.guvi.in/blog/best-cloud-computing-books/"
    },
    {
      title:"7 Best Digital Marketing Books 2023",
      image: "./All2.png",
      description:"In today’s digital age, where online presence and marketing are very important, gaining expertise in",
      link: "https://www.guvi.in/blog/best-digital-marketing-books/"
    },
    {
      title:"7 Real-World Cloud Computing Engineering Applications",
      image: "./all3.png",
      description:"Think about your smartphone, the apps you use, and even the movies you stream online",
      link: "https://www.guvi.in/blog/real-world-cloud-computing-applications/"
    },
    {
      title:"How Long It Would Take to Master Cloud Computing Engineering",
      image: "./all4.png",
      description:"In our modern world, technology is everywhere, making our lives more convenient and connected. One",
      link: "https://www.guvi.in/blog/how-long-it-would-take-to-master-cloud-computing-engineering/"
    },
    {
      title:"Cloud Computing vs Edge Computing: Which One is Better in 2023?",
      image: "./all5.png",
      description:"In the world of tech, two buzzwords, “Cloud Computing” vs “Edge Computing,” have been taking",
      link: "https://www.guvi.in/blog/cloud-computing-vs-edge-computing/"
    },
    {
      title:"Top Product-Based Companies for Digital Marketers",
      image: "./all6.png",
      description:"Selecting the right launchpad for a successful career in digital marketing isn’t just about joining",
      link: "https://www.guvi.in/blog/product-based-companies-for-digital-marketers/"
    },
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
    },
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
    },
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
    },
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
</div>
  )}

export default All