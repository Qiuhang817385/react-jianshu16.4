import React, { Component } from 'react';
import {TopicWrapper,TopicItem,TopicMore} from '../style';
import {connect} from 'react-redux';
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
               
              {
                  this.props.list.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                        <img alt="图片"
                        className="topic-pic"
                        src={require("../../img/1.jpg")}/>
                        {/* src = {item.get('imgUrl)} */}
                        {item.get('title')}
                    </TopicItem>
                    )
                  })
              }
               

                <TopicMore>更多热门专题</TopicMore>
            </TopicWrapper>
        )
    }
}
const mapState = (state)=>{
    return {
        list:state.get('home').get('topicList'),
    }
}
export default connect(mapState,null)(Topic);