import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const changeHomeDate = (data) => {
    return {
        type: actionTypes.CHANGE_HOME_DATA,
        articleList: data.articleList,
        recommendList: data.recommendList,
        topicList: data.topicList,
    }
}
const addHomeArticleList = (list,nextPage) => {
    return {
        type: actionTypes.ADD_HOME_ARTICLE_LIST,
        // 转换
        // 会把数组,和数组内部的对象都转换成immutable对象
        articleList: fromJS(list),
        nextPage
    }
}


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const data = res.data.data;
                dispatch(changeHomeDate(data));
            })
            .catch(() => {
                console.log('err');
            })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page)
            .then((res) => {
                const data = res.data.data;
                dispatch(addHomeArticleList(data,page+1));
            })
            .catch(() => {
                console.log('err');
            })

    }
}
export const toggleTopShow = (booleanScroll)=>{
    return {
        type: actionTypes.TOGGLE_TOP_SHOW,
        booleanScroll
    }

}


