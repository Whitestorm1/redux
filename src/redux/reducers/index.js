import {combineReducers} from 'redux';
import {ProductReducer, selectedProductsReducer, userReducer} from "./productReducer";

const reducers = combineReducers({
 allProducts:ProductReducer,
 product: selectedProductsReducer,
 user: userReducer,

});
export default reducers;