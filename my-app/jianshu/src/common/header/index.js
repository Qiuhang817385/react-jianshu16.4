import React ,{Component}from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper,SearchInfoList,SearchInfoItem,SearchInfoSwitch, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,SearchInfoTitle ,SearchInfo} from './style';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store';

const getListArea = (show)=>{
    if(show){
        return  (
            <SearchInfo>
                        <SearchInfoTitle>热门搜索
                            <SearchInfoSwitch>换一换</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            <SearchInfoItem>热门</SearchInfoItem>
                            <SearchInfoItem>热门</SearchInfoItem>
                            <SearchInfoItem>热门</SearchInfoItem>
                            <SearchInfoItem>热门</SearchInfoItem>
                            <SearchInfoItem>热门</SearchInfoItem>
                            <SearchInfoItem>热门</SearchInfoItem>
                        </SearchInfoList>
                    </SearchInfo>
        )

    }else{
        return null;
    }
}
class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
                {/* <Logo href="/" /> */}
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</span>
                       {getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='written'>
                        <span className="iconfont">&#xe626;</span>
                        写文章
                </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        handleFocus() {
            // const action = actionCreators.handleFocusAction();
            // dispatch(action);
            dispatch(actionCreators.handleFocusAction());
        },
        handleBlur() {
            const action = actionCreators.handleBlurAction();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Header);
// export default Header;