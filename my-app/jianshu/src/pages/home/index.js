import React, { PureComponent, Fragment } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, HackTop } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreator } from './store';
class Home extends PureComponent {
    handleScrollTop() {

        // alert(this.props.showScroll);

        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        {/* <span className="banner-img"></span> */}
                        <img className="banner-img" alt="图片" src={require("../img/logo.jpg")} />
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                    {/* 必须改成箭头函数,才会稍后执行,并且可以this指向这个组件 */}
                    {this.props.showScroll ? <HackTop onClick={() => this.handleScrollTop()}>回到顶部</HackTop> : null}

                </HomeWrapper>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        // 滚动条显示回到顶部
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
    componentWillUnmount(){
        /* 组件销毁的时候,给window上面绑定的事件解绑 */
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapStateToProps = (state) => {
    return {
        showScroll: state.get('home').get('showScroll')
    }
}
const mapDispatch = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreator.getHomeInfo());
            // dispatch(action) ;
        }
        ,
        changeScrollTopShow() {

            if (document.documentElement.scrollTop > 400) {
                // showScroll获取,然后修改
                dispatch(actionCreator.toggleTopShow(true))
            } else {
                dispatch(actionCreator.toggleTopShow(false))

            }
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Home);