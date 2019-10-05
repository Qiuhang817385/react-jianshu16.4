import { createStore } from 'redux';

// 传递过来reducer
import reducer from './reducer';

// 创建store,创建了一个数据的公共存储仓库
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;