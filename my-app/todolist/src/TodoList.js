/* import React from 'react';

function TodoList(){
  return(<div>你好11</div>);
}
export default TodoList; */
// 两种方式
import React, { Component, Fragment } from 'react';

import TodoItem from './TodoItem'

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
    };
    this.handleButtonDelete = this.handleButtonDelete.bind(this)
  }
  componentDidMount(){
    
  }
  render() {
    return (<Fragment>
      <div>
        {/*  */}
        {/* 此处可以优化  优化点1 */}
        <input
          className="input"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
          ref={(input) => this.input = input}
        />
        {/* 此处可以优化  优化点2 */}
        <button type="submit" onClick={this.handleButtonClick.bind(this)}>提交</button>
      </div>
      <ul ref={(ul)=>this.ul=ul}>

        {/* 数组的map方法 ,遍历  */}
        {this.getTodoItem()}

      </ul>
    </Fragment>
    );
  }

  // 优化3,提取ul当中的方法// return出去
  getTodoItem() {
    // return出去
    return this.state.list.map((item, index) => {
      // return <li key={index} onClick={this.handleButtonDelete.bind(this)}>{item}</li>
      // 怎么加参数,在bind后面传递
      return (
        <li key={item} >
          <TodoItem
            // key={index} //key值应该放在循环的最外面
            content={item}
            index={index}
            handleButtonDelete={this.handleButtonDelete}
          />
          {/*  <li key={index} onClick={this.handleButtonDelete.bind(this, index)}>
        {item}
      </li> */}
        </li>
      )
    })
  }

  // 这里可以接收到index
  handleButtonDelete(index) {
    // alert(event.target.index);
    // alert(index);
    const list = [...this.state.list];
    // 一份拷贝
    list.splice(index, 1);
    // 如果要改数据,必须调用setstate方法,不能this

    // 优化点3***************************原来是返回对象,现在是在函数里面返回对象

    /*  this.setState({
       // list:[...list],
       list: list,
     }) */
    // 这里的setState变成了异步的setState
    // 
    /* this.setState(()=>{
      return {
        list: list,
      }
    }) */
    this.setState(() => ({
      list: list,
    }))
  }
  handleButtonClick() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue],
    },()=>{
      console.log(this.ul.querySelectorAll('li').length);
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

    // 优化点4,需要对event做一个保存,异步出现的错误解决方法
    // const value  = event.target.value;
    //  inputValue: value,替换

   /*  this.setState({
      inputValue: event.target.value,
    }) */
    //  console.log(this);todolist


    // console.log(event.target);就是dom元素

    /* 也可以用另外一种方式获取dom */
    
    // const value = event.target.value;
    const value = this.input.value;

    this.setState(()=>{
      return {
        inputValue:value,
      }
    })


  }
}

export default TodoList;