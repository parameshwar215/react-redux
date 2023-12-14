// components/ProductComponent.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';
import { useNavigate } from 'react-router';

function ProductComponent() {
    const navigate=useNavigate()
    const [id,setid]=useState()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [productPhoto, setProductPhoto] = useState("");


    const dispatch = useDispatch();

    const  handleSubmit=()=>{
        dispatch(addProduct({id:Date.now(),name:name,category:category,photo:productPhoto,price:price,quantity:quantity,description,description}))
        alert("Product Detail are added successefully")
        navigate('/')
    }

    return (
        <>

            <div className="container-fluid m-3 p-3">
                <div className="row">

                    <div className="col-md-9">
                        <h1>Create Product</h1>
                        <div className="mb-3">
                            <input type="text" value={category} placeholder="Category" className="form-control"
                                onChange={(e) => setCategory(e.target.value)} />
                        </div>


                        <div className='mb-3'>
                            <input
                                type="text"
                                placeholder="Product Photo URL"
                                className='form-control'
                                value={productPhoto}
                                onChange={(e) => setProductPhoto(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <input type="text" value={name} placeholder="Product Name" className="form-control"
                                onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <textarea type="text" value={description} placeholder="Product Descriptin" className="form-control"
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="Number" value={price} placeholder="Product Price" className="form-control"
                                onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="Number" value={quantity} placeholder="Quantity" className="form-control"
                                onChange={(e) => setQuantity(e.target.value)} />
                        </div>


                    </div>
                    <div className="mb-3">
                        <button onClick={handleSubmit} className="btn btn-primary">Create Product</button>
                    </div>

                </div>
            </div>




        </>
    );
}

export default ProductComponent;
