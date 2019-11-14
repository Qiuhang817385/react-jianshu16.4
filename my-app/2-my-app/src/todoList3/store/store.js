import  reducer from './reducer'
import { createStore, applyMiddleware, compose  } from 'redux'
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(),
)
const store = createStore(reducer,enhancer)

export default store