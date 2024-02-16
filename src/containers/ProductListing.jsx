import React, {useEffect, useCallback, useMemo} from 'react'
import axios from 'axios' 
import {useDispatch, useSelector} from "react-redux"
import ProductComponent from './ProductComponent'
import {setProducts} from "../redux/actions/productsActions"
const ProductPage =()=>{
    // const products = useSelector((state)=>state.allProducts.products)
    const dispatch =useDispatch()
    const fetchProducts=async()=>{
        const response= await axios
        .get("https://fakestoreapi.com/products")
        .catch(err=>{
            console.log("Error: ", err)
        })
        dispatch(setProducts(response.data))
        // console.log(products)
    }
    useEffect(()=>{
        fetchProducts()//does useEffect work  corect with async function?
        
    }, [])
    return (
        <div className="listings">
            <ProductComponent/>
        </div>
    )
}
export default ProductPage