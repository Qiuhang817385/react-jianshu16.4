import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, SearchInfoList, SearchInfoItem, SearchInfoSwitch, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfoTitle, SearchInfo } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component {
    getListArea() {
        const { focused, page, totalpageIndex, list, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;

        // 把list转换成普通数组
        const newList = list.toJS();
        const listShow = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < (page) * 10; i++) {
                listShow.push(
                    // 还能push这个???厉害了
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索
                                <SearchInfoSwitch
                            onClick={
                                () => {
                                    handleChangePage(page, totalpageIndex,this.spinIcon); console.log(page, totalpageIndex);
                                }
                            }
                        >
                            <span className="icon iconfont spin" ref={(icon)=>{this.spinIcon = icon}}>&#xe7e9;</span>
                            换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            listShow
                        }
                    </SearchInfoList>
                </SearchInfo>
            )

        } else {
            return null;
        }
    }

    render() {
        const { focused, handleFocus, handleBlur,list } = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleFocus(list)}
                                onBlur={handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</span>

                        {this.getListArea()}
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
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        // page: state.get('header').get('page'),
        page: state.getIn(['header', 'page']),
        // totalpage1: state.get('header').get('totalpage1'),
        totalpageIndex: state.getIn(['header', 'pageTotal']),
        mouseIn: state.get('header').get('mouseIn'),
    }
}
const mapDispatchToprops = (dispatch) => {
    return {
        handleFocus(list) {
            if(list.size===0){
                dispatch(actionCreators.getListAction());
            }
            // list.size===0 && dispatch(actionCreators.getListAction());
            // const action = actionCreators.handleFocusAction();
            // dispatch(action);
          
            dispatch(actionCreators.handleFocusAction());
        },
        handleBlur() {
            const action = actionCreators.handleBlurAction();
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreators.handleMouseEnterAction())
        },
        handleMouseLeave() {
            dispatch(actionCreators.handleMouseLeaveAction())
        },
        handleChangePage(page, totalpage,spin) {

            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform = `rotate(${originAngle+360}deg)`;
            
            console.log(totalpage);//undefined
            if (page < totalpage) {
                let pasem = page + 1;
                console.log(pasem);
                dispatch(actionCreators.handleChangePageAction(pasem));
            } else {
                dispatch(actionCreators.handleChangePageAction(1))
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Header);
// export default Header;