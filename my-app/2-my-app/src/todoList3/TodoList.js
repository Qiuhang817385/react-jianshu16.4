import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInputValueAction,handleAddToListAction} from './store/actionCreators'

export class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.props.changeInputValue} value={this.props.value} />
                    <button onClick={this.props.handleAddToList}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (
                            <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.get('inputValue'),
        list:state.get('list')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = changeInputValueAction(e.target.value);
            dispatch(action);
        },
        handleAddToList(){
            const action = handleAddToListAction();
            dispatch(action);
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
