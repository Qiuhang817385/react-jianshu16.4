import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
class List extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.articleList.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <ListInfo >
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                                <img className="pic" src={require("../../img/4.jpg")} alt="a"></img>
                            </ListItem>
                        )
                    })
                }
            </Fragment>
        )
    }
}
const mapStateToprops = (state) => {
    return {
        articleList: state.get('home').get('articleList')
    }

}
export default connect(mapStateToprops, null)(List);