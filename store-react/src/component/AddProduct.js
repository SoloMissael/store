import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";

const AddProduct = props => {

    const [product,setProduct] = useState({productName:"",productPrice:"",productDescription:"",productImageUrl:""});

    const onChange = e =>{
        e.preventDefault();
        setProduct({...product,[e.target.name]: e.target.value });
    }
    
    const register = e => {
        console.log(product);
        axios.post('http://localhost:5000/product/create',product)
            .then(res => {
                window.location.href = "/products";
                //return res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
            <form>
                <label for="productName" className="mb-6">Nombre del producto: </label>
                <input type="text" name="productName" id="productName" className="mb-6" onChange={onChange} name="productName"></input><br/>

                <label for="productPrice" className="mb-6">Precio del producto: </label>
                <input type="number" name="productPrice" id="productPrice" className="mb-6" onChange={onChange} name="productPrice"></input><br/>

                <label for="productDescription" className="mb-6">Descripcion del producto: </label>
                <input type="text" name="productDescription" id="productDescription" className="mb-6" onChange={onChange} name="productDescription"></input><br/>

                <label for="productImageUrl" className="mb-6">Url de la imagen del producto: </label>
                <input type="text" name="productImageUrl" id="productImageUrl" className="mb-6" onChange={onChange} name="productImageUrl"></input><br/>
            </form>

            <div>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={register}>Subir</button>
            </div>
            </div>
      





    );
}

export default AddProduct;