import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {Link} from 'react-router-dom';
class List extends PureComponent {
    render() {
        return (
            <Fragment>
                {
                    this.props.articleList.map((item, index) => {
                        return (
                            // <ListItem key={item.get('id')}>
                            <ListItem key={index} >
                                <ListInfo >
                                    <Link to={"/detail/"+item.get('id')} style={{textDecoration:'none'}}>
                                        <h3 className="title">{item.get('title')}</h3>
                                    </Link>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                                <img className="pic" src={require("../../img/4.jpg")} alt="a"></img>
                            </ListItem>

                        )
                    })
                }
                <LoadMore onClick={() => this.props.getMoreArtList(this.props.articlePage)}>加载更多</LoadMore>
            </Fragment>
        )
    }
}
const mapStateToprops = (state) => {
    return {
        articleList: state.get('home').get('articleList'),
        articlePage: state.get('home').get('articlePage')
    }
}
const mapDispatch = (dispatch) => {
    return {
        getMoreArtList(page) {
            dispatch(actionCreator.getMoreList(page));
            // alert('1')
        }
    }
}
export default connect(mapStateToprops, mapDispatch)(List);