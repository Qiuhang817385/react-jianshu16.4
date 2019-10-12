import * as actionTypes from './actionTypes'; 
import {fromJS} from 'immutable';
const defaultState = fromJS({
    focused: false,
})
export default  (state = defaultState,action)=>{
    if(action.type === actionTypes.HANDLE_FOCUS){
        // immutable对象的set方法会结合之前的immutable的值
        // 和设置的值,返回一个全新的对象
        // return的 这个数值是全新的对象
        return state.set('focused',true);
    }
    if(action.type === actionTypes.HANDLE_BLUR){
        return state.set('focused',false);
    }
    return state;
}