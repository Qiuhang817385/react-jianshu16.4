import React, { Component } from 'react';
import 'antd/dist/antd.css';

// import axios from 'axios';
import store from './store/index';
// import {getTodoListTrunk, getInputChangeAction, handleAddToListAction, handleDelListAction } from './store/actionCreators';
// import {getInputChangeAction, handleAddToListAction, handleDelListAction,initListAction } from './store/actionCreators';
import { getInputChangeAction, handleAddToListAction, handleDelListAction, getInitListSaga } from './store/actionCreators';
// ,initListAction
import TodoListUi from './TodoListUi';
// const data = [];
class TodoListAntd extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleAddToList = this.handleAddToList.bind(this);
        this.handleDelList = this.handleDelList.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleAddToList={this.handleAddToList}
                handleDelList={this.handleDelList}
            ></TodoListUi>
        )
    }
    componentDidMount() {
        //thunk*thunk*thunk*thunk*thunk*thunk*thunk*thunk*
        // const action = getTodoListTrunk();
        // // 返回的action是一个函数,其余的里面都是对象
        // // 调用下面这个方法,这个函数会自动执行
        // store.dispatch(action);
        //thunk*thunk*thunk*thunk*thunk*thunk*thunk*thunk*

        //  saga*saga*saga*saga*saga*saga*saga*saga*
        const action = getInitListSaga();
        // console.log(action);
        store.dispatch(action);
        // store除了把action给reducer,还要给saga
        //  saga*saga*saga*saga*saga*saga*saga*saga*

        // axios.get('/api/todolist')
        //     .then((res) => {
        //         // console.log('success');
        //         const data = res.data;
        //         const action = initListAction(data);
        //         store.dispatch(action);
        //     })
        //     .catch(() => {
        //         console.log('error');
        //     })
    }
    handleDelList(index) {
        const action = handleDelListAction(index);
        store.dispatch(action);
    }
    handleAddToList() {
        const action = handleAddToListAction();
        store.dispatch(action);
    }
    handleInputChange(e) {
        const tagValue = e.target.value;
        const action = getInputChangeAction(tagValue);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(() => {
            return store.getState();
        })
    }
}
export default TodoListAntd;
