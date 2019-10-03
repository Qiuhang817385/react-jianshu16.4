import React, { Fragment, Component } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (<Fragment  onClick={this.handleClick}>
            {this.props.content}
            {/* <div></div> */}
        </Fragment>
        )
    }

    handleClick() {
        // alert(this.props.index);
        this.props.handleButtonDelete(this.props.index);
    }
}



export default TodoItem;