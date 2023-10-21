import React from 'react'
import './styles.css'
import { useState } from 'react';
import Home from './Home';

function CakeItems({items}) {
    const [flag, setFlag] = useState(true);
    const [count, setCount] = useState(0);

    const handleClickAdd = () => {
        setFlag(false);
        setCount((count) => count + 1);
        props.parentCallback(count);
    }
    const handleClickRemove = () => {
        setFlag(true);
        setCount((count) => count - 1)
    }
  return (
    <div>
        
                <div className="col mb-5">
    <div className="card h-100">
        {/* <!-- Sale badge--> */}
         {items.recommended ? <div className="badge bg-dark text-white position-absolute" style={{top: 0.5 + 'rem', right : 0.5 + 'rem'} }>  Best Seller </div> : <div style={{top: 0.5 + 'rem', right : 0.5 + 'rem'} }>  </div> }
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={items.imglink} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
            <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{items.name}</h5>
               
                {/* <!-- Product price--> */} 
                {items.discount ?  <div><span className="text-muted text-decoration-line-through"> Rs. {items.orginalPrice} </span> Rs. {items.discountPrice} </div>  : <div> Rs. {items.orginalPrice} </div>}
               
                
            </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
                {flag ?  
                <a className="btn btn-outline-dark mt-auto" onClick={handleClickAdd}> Add Item Cart </a>  
                :  <a className="btn btn-outline-dark mt-auto" onClick={handleClickRemove}> Remove From Cart  </a> 
                }
                </div>
           
        </div>
    </div>
    </div>

  
    
    </div>
  )
}

export default CakeItems



