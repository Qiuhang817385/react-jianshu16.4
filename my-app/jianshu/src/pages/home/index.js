import React, { Component, Fragment } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreator} from './store';
class Home extends Component {
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
                </HomeWrapper>
            </Fragment>
        )
    }
    componentDidMount(){
       this.props.changeHomeData();
    }
}
// const mapStateToProps
const mapDispatch = (dispatch)=>{
    return {
        changeHomeData(){
            dispatch(actionCreator.getHomeInfo());
            // dispatch(action) ;
        }
    }

}
export default connect(null,mapDispatch)(Home);