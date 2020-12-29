import { act } from "react-dom/test-utils"

const initialState = {
    all_category:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const allCategoryReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_SUCCESS_CATEGORY":
            return{
                ...state,
                all_category:action.payload,
                data_state:"FETCH_SUCCESS",
            }
        case "GET_FAILURE_CATEGORY":
            return{
                ...state,
                data_state:"FETCH_FAILURE"
            }   
        default:
            return{
                ...state
            }     
    }
}

export default allCategoryReducer;