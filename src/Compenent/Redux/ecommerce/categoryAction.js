import axios from 'axios';

export const getAllCategory =()=>{
    return(dispatch)=>{
        axios.get(`http://127.0.0.1:8000/api/get_all_category/`)
        .then(res=>{
            if(res.status==200){
                dispatch(getAllCategorySuccess(res.data))
            }else{
                dispatch(getAllCategoryFailure(res))
            }
        }).catch(err=>{
            dispatch(getAllCategoryFailure(err))
        })
    }
}

export const getAllCategorySuccess = (res) =>{
    return{
        type:"GET_SUCCESS_CATEGORY",
        payload:res,
    }
}

export const getAllCategoryFailure = (msg)=>{
    return{
        type:"GET_FAILURE_CATEGORY",
        payload:msg,
    }
}