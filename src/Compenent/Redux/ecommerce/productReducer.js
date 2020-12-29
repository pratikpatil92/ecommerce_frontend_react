const initialState = {
    products:{},
    error_msg:"",
    data_state:"NOT_INITIALIZE",
}

const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ON_PRODUCT_SUCCESS":
            return{
                ...state,
                products:action.payload,
                data_state:"FETCHED_SUCCESS",
            }
        case "ON_PRODUCT_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
                data_state:"FETCHED_FAILURE"
            }
        default:
            return{
                ...state,
            }    
    }
}

export default productReducer;

