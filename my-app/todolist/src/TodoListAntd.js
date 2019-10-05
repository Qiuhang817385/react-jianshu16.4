import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import store from './store/index';

// const data = [];
class TodoListAntd extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState().inputValue);
        // console.log(store.getState());
        // 组件引入仓库当中的数据,保存到自己组件当中的state当中
        this.state = store.getState();
        // console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleAddToList = this.handleAddToList.bind(this);
        // this.handleDelList = this.handleDelList.bind(this);
        // 当store里面的数据发生变化
        //  subscribe可以写一个函数,函数就会被自动执行
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <div style={{ margin: '10px 0 0 10px' }}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder="Basic usage"
                        style={{ width: '300px', marginRight: '10px' }}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleAddToList}>Primary</Button>
                    <List

                        style={{ marginTop: '10px', width: '300px' }}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item  >
                                {item}
                                <button
                                    style={{ position: "absolute", right: '3px' }}
                                    index={index}
                                    onClick={this.handleDelList.bind(this, index)}
                                >
                                    删除
                                </button>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
    handleDelList(index) {

        const action = {
            type: 'del_todo_item',
            index: index
        }
        store.dispatch(action);
    }
    handleAddToList() {
        // 先创建action
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action);
    }
    // 改变页面数据,页面联动
    // 不需要定义带JSX里面,是由 store.subscribe自动执行
    handleStoreChange() {
        // console.log('11');
        // this.setState(store.getState());
        //替换掉旧数据,并且实现了和store里面的数据联动的效果
        this.setState(() => {
            console.log(store.getState().inputValue);
            return store.getState();
        })
    }
    handleInputChange(e) {
        const tagValue = e.target.value;
        const action = {
            // type是描述的话
            type: 'change_input_value',
            // 下面名字随便起,value1
            value: tagValue
        }
        store.dispatch(action);
    }
}
export default TodoListAntd;
