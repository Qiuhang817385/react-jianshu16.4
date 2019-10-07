import { GET_INIT_LIST_SAGA,CHANGE_INPUT_VALUE, DEL_TODO_ITEM, ADD_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const handleAddToListAction = () => {
    return {
        type: ADD_TODO_ITEM
    }
}
export const handleDelListAction = (index) => {
    return {
        type: DEL_TODO_ITEM,
        index
    }
}
export const initListAction = (data) => {
    return {
        type: INIT_LIST_ACTION,
        data
    }
}

export const getTodoListTrunk = () => {
    // return {}   原来是return一个对象
    // 现在可以return一个函数
    // 需要store的dispatch方法
    // 当返回的是一个函数的时候,参数可以接收到这个方法
    return (dispatch) => {
        axios.get('/api/todolist')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                // 
                // store.dispatch(action);
                dispatch(action);
            })
            .catch(() => {
                console.log('error');
            })
    }
}
export const getInitListSaga = () => { 
    return {
        type:GET_INIT_LIST_SAGA

    }
}



