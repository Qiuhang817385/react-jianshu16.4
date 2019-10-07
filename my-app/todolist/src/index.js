import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList copy';
// import TodoList from './TodoList';
// import TodoList1 from './TodoList1';
// import App from './App';
// import App from './App -transiGroup2';

// import TodoListAntd from './TodoListAntd';
// import TodoListAntd from './TodoListAntd-ActionCreator';
//React-redux*React-redux*React-redux*React-redux*React-redux*
import TodoListReactredux from './TodoList-React-redux';
import { Provider } from 'react-redux';
import store from './store-react-redux';
const App = (
    <Provider store={store}>
        <TodoListReactredux></TodoListReactredux>
    </Provider>
);
//React-redux*React-redux*React-redux*React-redux*React-redux*
// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<TodoListReactredux />, document.getElementById('root'));

ReactDOM.render(App, document.getElementById('root'));