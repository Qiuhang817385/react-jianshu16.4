// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST_SAGA } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators';
function* getInitListSaga() {
    // 不需要再写promise式的函数了,写generator
    try {
        const res = yield axios.get('/api/todolist')
        const action = initListAction(res.data);
        // 把数据给了reducer
        yield put(action);
    } catch (e) {
        console.log('哎呀出错了');
        
    }

}
function* mySaga() {
    // saga必须是一个generator函数
    // 就是如果接收到一个这样的类型,就执行后面的那那个方法
    yield takeEvery(GET_INIT_LIST_SAGA, getInitListSaga);
}

export default mySaga;