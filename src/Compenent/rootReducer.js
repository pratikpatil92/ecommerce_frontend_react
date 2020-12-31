import {combineReducers} from 'redux';
import productReducer from './Redux/ecommerce/productReducer';
import allCategoryReducer from './Redux/ecommerce/categoryReducer';
import authReducer from './Redux/auth/authReducer'


export default combineReducers(
    {
        products:productReducer,
        all_category:allCategoryReducer,
        auth:authReducer,
    }
)