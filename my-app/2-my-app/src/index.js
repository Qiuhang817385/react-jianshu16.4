import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import TodoList from './todoList2/todoList'
// import ComponentName from './Hello'

import TodoList from './todoList3/TodoList'
import store from './todoList3/store/store';
import { Provider } from 'react-redux';
const App = (
    <Provider store={store}>
        <TodoList></TodoList>
    </Provider>
)
// ReactDOM.render(<TodoList />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));

