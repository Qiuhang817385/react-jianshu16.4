import axios from 'axios';
// import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';
const changeHomeDate = (data)=>{
    return {
        type:actionTypes.CHANGE_HOME_DATA,
        articleList: data.articleList,
        recommendList: data.recommendList,
        topicList: data.topicList,
    }
}

export const getHomeInfo = ()=>{
    return (dispatch) =>{
        axios.get('/api/home.json')
        .then((res)=>{
            const data = res.data.data;
            dispatch(changeHomeDate(data));
        })
        .catch(()=>{
            console.log('err');
        })
    }
}


