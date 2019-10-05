import React, { Component, Fragment } from 'react';
import './styleApp-transitionGroup.css';
import { CSSTransition } from 'react-transition-group';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  render() {

    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}> */}
        <CSSTransition
          // 入场动画样式,感知当前状态
          in={this.state.show}
          timeout={1000}
          classNames='test'
          unmountOnExit
          /* 隐藏的同时移除挂载点 */
          // 入场动画结束之后
          // el指的就是div
          onEntered={(el) => { el.style.color='red'}}

          appear={true}
        >
          <div> Hello1121 </div>
        </CSSTransition>
        <button onClick={this.handleToggle}>切换</button>
      </Fragment>
    );
  }
  handleToggle() {
    // alert('1');
    this.setState(() => {
      return {
        show: this.state.show ? false : true
      }
    })
  }
}
export default App;
