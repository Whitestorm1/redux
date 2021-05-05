import Data from "../../containers/Data";
import {ActionTypes} from "../constants/Action-Types";

export const form =(Data1)=>{
  return{
    type:ActionTypes.USER_LOGIN,
    payload: Data1,
  }
}

export const setProducts =(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products,

};

};
export const selectedProduct =(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload: products,

};


};
export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };