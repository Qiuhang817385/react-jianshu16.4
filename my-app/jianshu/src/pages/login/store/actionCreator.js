import axios from 'axios';
import * as actionTypes from './actionTypes';
const changeLogin = ()=>{
    return {
        type:actionTypes.CHANGE_LOGIN,
        value:true

    }
}
export const loginAction = (userName,passWord)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+userName+'&password='+passWord)
        .then((res)=>{
            const data = res.data.data;
            if(data){
                dispatch(changeLogin());
                alert('登陆成功');
            }else{
                alert('登陆失败1');
            }
        })
        .catch(()=>{
            console.log('登陆失败2');
            
        })
    }

}

export const logoutAction = ()=>{
    return {
        type:actionTypes.CHANGE_LOGOUT,
        value:false
    }
}