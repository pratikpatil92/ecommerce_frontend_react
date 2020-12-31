import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../../utilities/setAuthToken'

export const onRegister = (user,history)=>{
    return(dispatch)=>{
        axios.post("http://127.0.0.1:8000/api/create_profile/", user)
        .then(
            res=>{
                console.log(res)
                if (res.status==201){
                    console.log("action",res.data)
                    dispatch(onRegisterSuccess(res.statusText))
                    history.push("/login")
                }else{
                    console.log("error ",res)
                    dispatch(onRegisterFailure("You have enter wrong value"))
                }
            }
        )
        .catch(err=>{
            
            console.log("action er",err)  
            // console.log(Object.keys(er)+" is wrong")
            dispatch(onRegisterFailure(err))
            
        })
    }

}

export const onLogin=(user, history)=>{
    return (dispatch)=>{
        axios.post("http://127.0.0.1:8000/api/login/",user)
        .then((res)=>{
           console.log(res);
            if(res.status==200){

                const {token}=res.data;
                // const decoded=jwt_decode(token);
                // console.log("decoded",decoded)
                localStorage.setItem("user", token);
                setAuthToken(token);
                
                dispatch(onLoginSuccess());
                history.push('/');
            }else{
                console.log("er1",res)
                dispatch(onLoginFailure(res));
            }
        })
        .catch(err=>{
            console.log("er2",err);
            dispatch(onLoginFailure(err));
        })
    }
}

export const onRegisterSuccess=(msg)=>{
    return {
        type:"ON_REGISTER_SUCCESS",
        payload:msg
    }
}
export const onRegisterFailure=(msg)=>{
    return {
        type:"ON_REGISTER_FAILURE",
        payload:msg
    }
}

export const onLoginSuccess=()=>{
    return {
        type:"ON_LOGIN_SUCCESS",
        // payload:user,
    }

}

export const onLoginFailure=(msg)=>{
    return {
        type:"ON_LOGIN_FAILURE",
        payload:msg,
    }
}