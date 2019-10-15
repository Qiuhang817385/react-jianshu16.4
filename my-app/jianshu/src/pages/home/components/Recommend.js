import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';
class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper >
                {
                    this.props.recommendList.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')} />
                            // <RecommendItem  imgUrl={item.get('imgUrl')}/>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        recommendList: state.get('home').get('recommendList'),
    }
}
export default connect(mapState, null)(Recommend); 