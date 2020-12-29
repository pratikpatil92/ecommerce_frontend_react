import axios from 'axios';

export const getProduct = (name)=>{
    return(dispatch)=>{
        axios.get(`http://127.0.0.1:8000/api/get_filter_product_by_category/?category__name=${name}`)
        .then(res=>{
            if(res.status==200){
                // console.log("action",res)
                dispatch(ongetProductSuccess(res.data))
            }else{
                dispatch(ongetProductFailure(res))
            }
        }).catch(err=>{
            console.log(err)
            dispatch(ongetProductFailure(err.data))
        })
    }
}

export const ongetProductSuccess = (res)=>{
    return{
        type:"ON_PRODUCT_SUCCESS",
        payload:res,
    }
}

export const ongetProductFailure = (msg)=>{
    return{
        type:"ON_PRODUCT_FAILURE",
        payload:msg
    }
}