import React, { PureComponent, Fragment } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
    render() {
        if(!this.props.login){
            return (
                <Fragment>
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder='账号' ref={(input) => { this.account = input }}></Input>
                            <Input placeholder='密码' type='password' ref={(input) => { this.password = input }}></Input>
                            {/* stylecommont这个组件提供了innerRef来获取dom元素 */}
                            <Button onClick={() => this.props.loginModel(this.account, this.password)}>登陆</Button>
                        </LoginBox>
                    </LoginWrapper>
                </Fragment>
            )
        }else{
           return  <Redirect to='/'></Redirect>
        }
       
    }
}
const mapStateToprops = (state) => {
    return {
        login:state.get('login').get('login')
    }
}
const mapDispatch = (dispatch) => {
    return {
        loginModel(accountElem, passwordElem) {
            // console.log('1');
            // console.log(accountElem.value, passwordElem.value);
            dispatch(actionCreator.loginAction(accountElem.value,passwordElem.value))
        }
    }
}
export default connect(mapStateToprops, mapDispatch)(Login);