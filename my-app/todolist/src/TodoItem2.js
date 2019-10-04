import React, { Fragment, Component } from 'react';
class TodoItem1 extends Component {
   /*  constructor(props) {
        super(props);
    } */
    render() {
       
        return (<Fragment>
            <div >
                {this.props.content}
                <button onClick={this.handleDel.bind(this)}>删除</button>
            </div>
        </Fragment>
        )
    }
    handleDel() {
       console.log(this);//undefined
       
    }
}
export default TodoItem1;