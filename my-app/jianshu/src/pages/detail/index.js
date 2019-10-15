import React, { PureComponent, Fragment } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import {withRouter} from 'react-router-dom';
class Detail extends PureComponent {
    render() {
      
        return (
            <Fragment>
                <DetailWrapper>
                    <Header> {this.props.title}</Header>
                    <Content>
                        <img alt="" src={require("../img/1.jpg")}></img>
                        <p> {this.props.content}</p>
                    </Content>
                </DetailWrapper>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getDetail(  this.props.match.params.id);
    }
}
const mapStateToprops = (state) => {
    return {
        title: state.get('detail').get('title'),
        content: state.get('detail').get('content'),
    }
}
const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreator.getArticleDetail(id))
        }
    }
}
export default connect(mapStateToprops, mapDispatch)(withRouter(Detail));