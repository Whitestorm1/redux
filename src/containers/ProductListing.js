import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import ProductComponent from './ProductComponents';
import { setProducts } from '../redux/action/productAction';
import Button from './Button';
import Sidebar from './Sidebar';

 const ProductsListing =()=> {
     const products= useSelector((state)=> state)
     const dispatch = useDispatch();
      const fetchProducts = async () => {
          const response =await axios.get('https://fakestoreapi.com/products').catch((err)=>{
              console.log("error",err)
          });
          dispatch( setProducts(response.data));

      };
      useEffect(()=>{
          fetchProducts();

      },[]);
      console.log(products)
       
          return (
        
        <div className="ui four column grid " style={{marginTop:"2%"}}>
  
        

        <ProductComponent/>
        <Button/>
            
        </div>
        
    );
};
export default ProductsListing;