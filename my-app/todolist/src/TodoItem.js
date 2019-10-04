import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }
        /* 发生了变化,需要渲染 */
        return false;
    }
    
    render() {
        // 优化1
        const {content,test} = this.props;
        return (<Fragment  >
            <div onClick={this.handleClick}>
                {/* {this.props.content} */}
               {test}---- {content}
            </div>
        </Fragment>
        )
    }
    handleClick() {
        // 优化2
        const {handleButtonDelete,index} = this.props;
        // alert(this.props.index);
        handleButtonDelete(index);
    }
    
}
// 对这个组件做属性的校验
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    handleClick:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps={
    test:'hello',
}
export default TodoItem;