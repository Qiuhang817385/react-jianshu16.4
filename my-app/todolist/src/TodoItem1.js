import React, { Fragment, Component } from 'react';
class TodoItem1 extends Component {
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this);
    }
    render() {
        const { content } = this.props;
        return (<Fragment>
            <li >
                {content}
                <button onClick={this.handleDel}>删除</button>
            </li>
        </Fragment>
        )
    }
    handleDel() {
        const { listDel, index } = this.props;
        listDel(index);
        // alert(index);
    }
}
export default TodoItem1;