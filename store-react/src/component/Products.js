import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";


const Products = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = () => {
        axios.get('http://localhost:5000/product/get')
            .then(res => {
                setProducts(products => res.data);
                //return res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const addProduct = (e) => {
        console.log("add product")
        props.history.push("/product/create")
    }

    const editProduct = (product) => {
        console.log(product)
        props.history.push("/product/update/"+product._id)
        //props.history.push({pathname:"/product/update/"+product._id, state: }})
    }   

    const deleteProduct = (product) =>{
        axios.delete("http://localhost:5000/product/delete/"+ product._id)
        alert("Se elimino el producto "+ product.productName);
        document.location.reload();
        
        
    }

    console.log(products);


    return (


        <div className="bg-gray-100 mx-auto bg-white shadow-xl">
            <div className="flex justify-end m-8">
                <button onClick={addProduct} className="bg-gray-800 bg-opacity-30 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded flex justify-end">
                    <h1 className="text-3xl">+</h1>
                </button>
            </div>

            <div className="flex flex-wrap ml-52">

                {products.map((product) => (
                    <div className="m-16">

                        <div className="object-left w-96 flex justify-end space-x-4">
                            <button onClick={() => editProduct(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Editar
                            </button>
                            <button onClick={() => deleteProduct(product)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded object-right-top">
                                X
                            </button>

                        </div>


                        <div className="grid grid-cols-3 sm:grid-cols-3 w-96">
                            <div className="relative col-start-1 row-start-1 bg-gradient-to-t from-black sm:bg-none w-96 ml-20 mb-20">
                                <img src={product.productImageUrl} width="200" height="200"></img>
                                <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">{product.productName}</p>
                                <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">${product.productPrice}</h2>
                            </div>
                        </div>
                    </div>


                ))}

            </div>

        </div>
    );
}

export default Products;