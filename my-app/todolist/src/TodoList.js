/* import React from 'react';

function TodoList(){
  return(<div>你好11</div>);
}
export default TodoList; */
// 两种方式
import React, { Component, Fragment } from 'react';

import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 数据需要被定义在状态里面 this.state组件的状态
    this.state = {
      // inputValue:'',//这个数据是单项绑定
      inputValue: '',
      // 原生是onchange事件监听数据改变,react里面是事件钩子
      // onChange
      list: []
    }
  }
  render() {
    return (<Fragment>
      <div>
        {/*  */}

        <input className="input" type="text" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} />
        <button type="submit" onClick={this.handleButtonClick.bind(this)}>提交</button>
      </div>
      <ul>
        {
          /*数组的map方法 ,遍历 */
          this.state.list.map((item, index) => {
            // return <li key={index} onClick={this.handleButtonDelete.bind(this)}>{item}</li>
            // 怎么加参数,在bind后面传递
            return <li key={index} onClick={this.handleButtonDelete.bind(this, index)}>
              {item}
            </li>
          })
        }

      </ul>
    </Fragment>
    );
  }
  // 这里可以接收到index
  handleButtonDelete(index) {
    // alert('1')
    // alert(event.target.index);
    // alert(index);
    const list = [...this.state.list];
    // 一份拷贝
    list.splice(index, 1);
    // 如果要改数据,必须调用setstate方法,不能this
    this.setState({
      // list:[...list],
      list: list,
    })
  }
  handleButtonClick(event) {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue],
    })
  }

  handleInputChange(event) {
    // console.log(event.target);//获取dom节点  target
    // console.log(event.target.value);//获取dom节点数据  target
    //this指向不对,希望this指向todolist这个组件,才能调用构造函数
    // 利用bind函数改变this的指向
    /*  onChange={this.handleInputChange.bind(this)}/> */
    //如果想改变里面的状态,不能直接this这种引用的方式
    // react给每个组件提供了一个方法this.setState({})
    // this.state.inputValue = event.target.value;

    this.setState({
      inputValue: event.target.value,
    })
    //  console.log(this);todolist

  }
}

export default TodoList;