import { useEffect, useState, useContext } from "react";
import { CartContext } from "./Cart";
import CartComponent from "./CartComponent";
import React from 'react'

function Products() {

  const { cartItems, addToCart } = useContext(CartContext)
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false)

    async function getProducts() {
        const response = await fetch('./items.json')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
      }

      useEffect(() => {
        getProducts()
      }, [])

      const toggle = () => {
        setShowModal(!showModal)
      }

  return (
    <div>
<div className='flex flex-col justify-center bg-gray-100'>
  <div className='flex justify-between items-center px-20 py-5'>
    <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop Cart Using Context API</h1>
    {!showModal && <button className='btn btn-outline-dark px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-blue-700'
  onClick={toggle}
><i class="fas fa-shopping-cart"></i>Cart ({cartItems.length})</button>}
  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
    {
      products.map(product => (
        <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
          <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
          <div className='mt-4'>
            <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
           
            <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
            <p className='mt-2 text-gray-600 text-sm'>Brand: {product.brand}</p>
            <p className='mt-2 text-gray-600'>${product.price}</p>
          </div>
          <div className='mt-6 flex justify-between items-center'>
          <button onClick={() => addToCart(product)} className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>

</div>
        </div>
      ))
    }
  </div>
  <CartComponent showModal={showModal} toggle={toggle} />
</div>

    </div>
  )
}

export default Products