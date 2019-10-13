import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
const changeList = (data) => {
    return {
        type: actionTypes.CHANGE_LIST,
        data: fromJS(data),
        // totalPage1:4,
        totalPage1:Math.ceil(data.length/10),
    }
}
export const handleFocusAction = () => {
    return {
        type: actionTypes.HANDLE_FOCUS
    }
}
export const handleBlurAction = () => {
    return {
        type: actionTypes.HANDLE_BLUR
    }
}
export const handleMouseEnterAction = ()=>{
    return {
        type: actionTypes.HANDLE_MOUSE_ENTER
    }
}
export const handleMouseLeaveAction = ()=>{
    return {
        type: actionTypes.HANDLE_MOUSE_LEAVE
    }
}
export const handleChangePageAction = (page)=>{
    return {
        type: actionTypes.HANDLE_CHANGE_PAGE,
        page
    }
}
export const getListAction = () => {
    // thunk允许返回一个函数
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data;
                dispatch(changeList(data.data));
            })
            .catch(() => {
                console.log('err');
            })
    }
}
// 没有必要暴露出去
