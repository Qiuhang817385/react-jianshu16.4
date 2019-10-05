import React, { Component, Fragment } from 'react';
import './styleApp-transitionGroup2.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: true
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {

    return (
      <Fragment>
        <TransitionGroup>

          {
            this.state.list.map((item, index) => {
              return (
                // 怎么给新增的每一项，都添加动画效果
                // 原来的做法是添加class类

                <CSSTransition
                  // 入场动画样式,感知当前状态
                 
                  timeout={1000}
                  classNames='test'
                  unmountOnExit
                  /* 隐藏的同时移除挂载点 */
                  // 入场动画结束之后
                  // el指的就是div
                  onEntered={(el) => { el.style.color = 'red' }}
                  appear={true}
                  key={index}
                >

                  <div>
                    {item}
                  </div>

                </CSSTransition>

              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>切换</button>
        {/* 不再需要show,className,事件点击事件,添加类,
          页面加载之后,自动会添加纯css样式,没有js的操作
        */}
      </Fragment>
    );
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }

}
export default App;
