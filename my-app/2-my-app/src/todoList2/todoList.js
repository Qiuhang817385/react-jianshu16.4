import React, { Component } from 'react'
import TodoItem1 from './TodoItem1'
import store from './store';
import {getInputChangeAction,btnSubAction,listDelAction} from './store/actionCreators'
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        store.subscribe(this.handleStoreChange);
    }
    // 监听store改变
    handleStoreChange = () => {
        this.setState(store.getState());
    }
    state = store.getState();
    // 1 . inputOnChange
    inputOnChange = (eve) => {
        const action = getInputChangeAction(eve.target.value);
        store.dispatch(action);
    }

    //2.1   获取渲染列表的值
    getTodoItem = () => {
        return this.state.list.map((item, index) => {
            return (
                // 子组件修改父组件里面的数据
                /* 
                    方法:子组件接受父组件传来的方法和数据,调用父组件当中的方法和数据,对父组件里面的内容进行修改,
                    子组件里面的方法    调用    父组件里面的方法
                */
                <TodoItem1 key={index} index={index} content={item} listDel={this.listDel}></TodoItem1>
            )
        })
    }
    // 2 . btnSub
    btnSub = () => {
       const action = btnSubAction();
       store.dispatch(action);
    }
    //3删除元素列表的值
    listDel = (index) => {
      const action = listDelAction(index);
      store.dispatch(action)
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.inputOnChange} />
                    <button onClick={this.btnSub}>
                        提交
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </div>
        )
    }



}
