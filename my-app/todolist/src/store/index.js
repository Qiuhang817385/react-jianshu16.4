import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga'

import todoSagas from './sagas'
// 传递过来reducer
import reducer from './reducer';
// import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);

// 创建store,创建了一个数据的公共存储仓库
const store = createStore(
    reducer, enhancer
    // thunk和REDUX_DEVTOOLS_EXTENSION都是redux的中间件
    // 通过redux使用store的时候,要使用中间件,是redux的中间件
    // applyMiddleware(
    //     thunk)
    //     // , 
    //     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(todoSagas)

export default store;