import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUi = (props) => {
    return (
        <div style={{ margin: '10px 0 0 10px' }}>
            <div>
                <Input
                    /* 没有state,引入,父传子 ,this.props.inputValue*/
                    // value={this.state.inputValue}
                    // value={this.props.inputValue}
                    value={props.inputValue}
                    placeholder="Basic usage"
                    style={{ width: '300px', marginRight: '10px' }}
                    // onChange={this.handleInputChange}
                    // onChange={this.props.handleInputChange}
                    onChange={props.handleInputChange}
                />
                <Button type="primary"
                    // onClick={this.handleAddToList}
                    // onClick={this.props.handleAddToList}
                    onClick={props.handleAddToList}
                >Primary</Button>
                <List

                    style={{ marginTop: '10px', width: '300px' }}
                    bordered
                    // dataSource={this.state.list}
                    // dataSource={this.props.list}
                    dataSource={props.list}
                    // dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item  >
                            {item}
                            <button
                                style={{ position: "absolute", right: '3px' }}
                                index={index}
                                // onClick={this.handleDelList.bind(this, index)}
                                // onClick={(index) => { this.props.handleDelList(index) }}
                                onClick={(
                                    // 这里不会有index的值,
                                    // onclick是一个箭头函数,不会接受到index,这个index是event事件对象,这里需要的不是eve里面的,而是每一项的下标
                                ) => { props.handleDelList(index) }}
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

// class TodoListUi extends Component {
//     render() {
//         return (
//             <div style={{ margin: '10px 0 0 10px' }}>
//                 <div>
//                     <Input
//                         /* 没有state,引入,父传子 ,this.props.inputValue*/
//                         // value={this.state.inputValue}
//                         value={this.props.inputValue}
//                         placeholder="Basic usage"
//                         style={{ width: '300px', marginRight: '10px' }}
//                         // onChange={this.handleInputChange}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary"
//                         onClick={this.props.handleAddToList}
//                     // onClick={this.handleAddToList}
//                     >Primary</Button>
//                     <List

//                         style={{ marginTop: '10px', width: '300px' }}
//                         bordered
//                         dataSource={this.props.list}
//                         // dataSource={this.state.list}
//                         renderItem={(item, index) => (
//                             <List.Item  >
//                                 {item}
//                                 <button
//                                     style={{ position: "absolute", right: '3px' }}
//                                     index={index}
//                                     // onClick={this.handleDelList.bind(this, index)}
//                                     onClick={(index) => { this.props.handleDelList(index) }}
//                                 >
//                                     删除
//                                 </button>
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }
export default TodoListUi;