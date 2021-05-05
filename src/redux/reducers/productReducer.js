import { ActionTypes } from "../constants/Action-Types";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products:[],
}
const UserInitialState={
    users:{}

}

export const userReducer=(state= UserInitialState ,{type,payload}) => {
    switch (type) {
        case ActionTypes.USER_LOGIN:
            return {...state,USER: payload };
            
        
    
        default:
            return state;
    }

};


export const ProductReducer=(state= initialState ,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products: payload };
            
        
    
        default:
            return state;
    }

};
export const  selectedProductsReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return{...state,...payload };
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
          
        default:
            return state;
    }

}