import React, { Component } from 'react'
import TodoItem1 from './TodoItem1'
export default class TodoList extends Component {
    state = {
        inputValue: '',
        list: []
    }
    // 1 . inputOnChange
    inputOnChange = (eve) => {
        const value = eve.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        })
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
        this.setState((pre) => {
            return {
                inputValue: '',
                list: [...pre.list, pre.inputValue]
            }
        })
    }
    //3删除元素列表的值
    listDel = (index) => {
        // alert('1')
        this.setState((prevState) => {
            // prevState等价于,修改之前的数据       这里就等价于this.state
            // let arr = [...this.state.list];
            let arr = [...prevState.list];
            arr.splice(index, 1);
            return {
                list: arr
            }
        })
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
