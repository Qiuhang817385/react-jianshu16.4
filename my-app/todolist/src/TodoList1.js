import React, { Fragment, Component } from 'react';
import TodoItem1 from './TodoItem1';
class TodoList extends Component {
  constructor(props) {
    super(props);
	
	
    this.state = {
      inputValue: '',
      list: []
    };
	
	
    this.inputOnchange = this.inputOnchange.bind(this);
    this.btnSub = this.btnSub.bind(this);
    // 记得传递给子组件的时候绑定this
    this.listDel = this.listDel.bind(this);
  }
  
  
  
  
  render() {
    const { inputValue } = this.state;
	
	
    return (<Fragment>
      <div>
        <input type="text" value={inputValue} onChange={this.inputOnchange}></input>
        <button type="submit" onClick={this.btnSub}>提交</button>
      </div>
      <ul>
        {
          this.getTodoItem()
        }
      </ul>
    </Fragment>
    )
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem1 key={index} index={index} content={item} listDel={this.listDel}></TodoItem1>
      )
    })
  }
  inputOnchange(event) {
    const value = event.target.value
    this.setState(() => {
      return {
        inputValue: value,
      }
    })
  }
  btnSub() {
    this.setState((prevState) => {
      return {
        inputValue: '',
        list: [...prevState.list, prevState.inputValue],
      }
    })
  }
  listDel(index) {
    // alert(index)


    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    })
    // list.splice()
  }
}
export default TodoList;

