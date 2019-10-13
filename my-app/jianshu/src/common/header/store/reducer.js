import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    pageTotal: 1,
})
export default (state = defaultState, action) => {
    switch (action.type) {
        // immutable对象的set方法会结合之前的immutable的值
        // 和设置的值,返回一个全新的对象
        // return的 这个数值是全新的对象
        case actionTypes.HANDLE_FOCUS:
            return state.set('focused', true);
        // 已经有return了,不用break
        // break;
        case actionTypes.HANDLE_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            // action.data,调用下面这个方法,会把list这个,原来已经变成了immutable的数组重新变成普通数组
            console.log( action.totalPage);
            console.log( action.totalPage1);
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            return state.merge({
				list: action.data,
                pageTotal: action.totalPage1,
			});

        case actionTypes.HANDLE_MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.HANDLE_MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.HANDLE_CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }


}