import React from 'react';
// import store from './store-react-redux';
import { connect } from 'react-redux';
const TodoListReactredux = (props) => {
    const { inputValue, changeInputValue, handleClick, handleDelList, list } = props;
    return (

        <div>
            <div>
                {/* <input value={this.state.inputValue}></input> */}
                <input
                    value={inputValue}
                    // onChange={this.handleInputChange}
                    // onChange={this.props.changeInputValue}
                    onChange={changeInputValue}
                ></input>
                <button
                    // onClick={this.props.handleClick}
                    onClick={handleClick}
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        // 利用箭头函数来获取index
                        return <li onClick={() => { handleDelList(index) }} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
// class TodoListReactredux extends Component {
//     // 现在这个组件变成了一个UI组件
//     // 只有render函数,又变成了无状态组件
//     render() {

//         return (

//         )
//     }
//     /*  handleInputChange(e) {
//          // console.log(e.target.value);
//      } */

// }
// mapStateToProps把store里面的数据映射到这个组件,当成这个组件的props
const mapStateToProps = (state) => {
    return {
        // 数据的映射关系
        inputValue: state.inputValue3,
        list: state.list
    }
}
// 把store.dispatch方法,挂载到props上面
// 即通过store.dispatch调用this.props
const mapDispatchToProps = (dispatch) => {
    return {
        // 对store的数据做修改
        changeInputValue(e) {
            //值
            const value = e.target.value;
            //action
            const action = {
                type: 'change_input_value',
                value
            }
            dispatch(action);
        },
        handleClick() {
            // console.log('123');
            const action = {
                type: 'add_to_list',
            }
            dispatch(action);
        },
        handleDelList(index) {
            const action = {
                type: 'del_li_list',
                index
            }
            // console.log(index);
            dispatch(action);
        }
    }
}
// export default TodoListReactredux;
// TodoListReactredux本身是一个UI组件现在,无状态
// 但是整体再返回去,export 和store做了connect
// 那么返回去的是一个容器组件
// 这就是redux里面的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactredux);
// 这个组件和store做连接,做连接的规则定义在mapStateToProps