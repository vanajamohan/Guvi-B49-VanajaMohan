import React from 'react'

function Card({courseDetails}) {
  return (
    <div>
    <div className="cardbox m-4">
            <div className="card" style={{width: 18 + 'rem'}}>
               <img src={courseDetails.image} className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h5 className="card-title">{courseDetails.title}</h5>
                    <p className="card-text">{courseDetails.description}</p>
                    <a href={courseDetails.link} target="blank" >Read More</a>
                </div>
           </div>
        </div> 
        </div>
  )
}

export default Card