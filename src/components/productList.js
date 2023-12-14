import React from 'react'

import { useSelector } from 'react-redux'

function ProductList() {

    const products=useSelector(state=>state.product.productsList)
    console.log(products)
  return (
    <>
    <h1>Products List</h1>

    <div className='d-flex flex-wrap'>
  {products?.map((p) => (
    <div className="card m-2" style={{ width: "20rem", height: "24rem" }} key={p.id}>
      <img src={p.photo} style={{ height: "14rem" }} className="card-img-top" alt={p.name} />
      <div className="card-body">
        <h5 className="card-title">{p.name}</h5>
        <h5 className="card-title">Rs.{p.price}/-</h5>
        <p className="card-text">{p.description}</p>
      </div>
    </div>
    // Display a new row after every 4 products
    // {index > 0 && index % 3 === 0 && <div className="w-100"></div>}
  ))}
</div>
    
    </>
      
   
  )
}

export default ProductList
