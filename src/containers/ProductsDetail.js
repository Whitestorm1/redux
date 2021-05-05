
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/action/productAction";
import { Spinner } from "react-bootstrap";
const ProductDetail = () => {
  const { ProductId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log("response",response);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (ProductId && ProductId !== "") fetchProductDetail(ProductId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [ProductId]);
  return (
    <div className="ui grid container" style={{marginTop:"2%"}} >
    {Object.keys(product).length === 0 ? (
        <div><Spinner animation="border" /></div>
      ) : (
        <div className="ui placeholder segment" >
          <div className="ui two column stackable center aligned grid">
           
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
    </div>
  );
};

export default ProductDetail;
