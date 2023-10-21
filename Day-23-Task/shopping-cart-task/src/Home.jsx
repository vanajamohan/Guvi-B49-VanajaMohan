import React from 'react'
import './styles.css'
import image from "./img/thumbbg.jpg"
import './index.css'


function Home({count}) {
  return (
    <div>
       
{/* <!-- Navigation--> */}
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Bakery & Confectionery </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>


        
       
        {/* <!-- Header--> */}
        <header className="bg-dark py-5" style={{backgroundImage:`url(${image})`}}>
      
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">The Cluster Cakes!!</h1>
                    <p className="lead fw-bolder text-black-50 mb-0">Enjoy Delicious Homemade Cakes and Desserts</p>
                </div>
            </div>
            
        </header>
       
        </div>
  )
}

export default Home