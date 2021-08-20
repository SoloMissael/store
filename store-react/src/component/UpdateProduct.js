import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router";
import axios from "axios";

const UpdateProduct = props => {

    const [product, setProduct] = useState([]);
    const productId = useParams().idProduct;

    useEffect(() => {
        getProduct();
    }, []);
    
    const getProduct = () => {
        axios.get('http://localhost:5000/product/getById/'+productId)
            .then(res => {
                setProduct(product => res.data[0]);
                //return res.data;
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    
    console.log(product)
    return (
        <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
            <form action="http://localhost:5000/product/create" method="POST">
                <label  for="nombre" className="mb-6">Nombre del producto: </label>
                <input type="text" name="productName" id="nombre" className="mb-6" value={product.productName}></input><br/>

                <label for="precio" className="mb-6">Precio del producto: </label>
                <input type="number" name="productPrice" id="precio" className="mb-6" value={product.productPrice}></input><br/>

                <label for="descripcion" className="mb-6">Descripcion del producto: </label>
                <input type="text" name="productDescription" id="descripcion" className="mb-6" value={product.productDescription}></input><br/>

                <label for="url" className="mb-6">Url de la imagen del producto: </label>
                <input type="text" name="productImageUrl" id="url" className="mb-6" value={product.productImageUrl}></input><br/>
            </form>

            <div>
                <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Subir</button>
            </div>
            </div>
    );
}

export default UpdateProduct;