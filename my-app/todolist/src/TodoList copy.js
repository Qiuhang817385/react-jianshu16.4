import React,{Fragment,Component} from 'react';
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
    }
  };
  render(){
    return(<Fragment>
    <input type="text" value={this.state.inputValue} onChange = {this.inputChange.bind(this)}></input>
  </Fragment>)
}
inputChange(event){
  console.log(event.target.value);
  
  this.setState({
    inputValue:event.target.value,
  })
}
}
export default TodoList;