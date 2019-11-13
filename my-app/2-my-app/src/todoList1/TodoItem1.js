import React, { Component } from 'react'

export default class TodoItem1 extends Component {
    handleDel = () => {
        this.props.listDel(this.props.index)
    }
    render() {
        return (
            <div>
                <li onClick={this.handleDel}>
                    {this.props.content}
                </li>
            </div>
        )
    }
}
