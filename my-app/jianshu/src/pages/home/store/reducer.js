import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage:1,
    showScroll:false

})
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            })
        case actionTypes.ADD_HOME_ARTICLE_LIST:
                return state.merge({
                    articlePage:action.nextPage,
                    articleList: state.get('articleList').concat(action.articleList),
                })
        case actionTypes.TOGGLE_TOP_SHOW:
            return state.set('showScroll',action.booleanScroll)
           
        default:
            return state;
    }
}