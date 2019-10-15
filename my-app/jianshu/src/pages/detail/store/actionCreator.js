import * as actionTypes from './actionTypes';
import axios from 'axios';
const changeDetail = (title,content) => {
    return {
        type:actionTypes.CHANGE_DETAIL,
        title,
        content
    }
}
export const getArticleDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id)
            .then((res) => {
                const data = res.data.data;
                // console.log(data.title);
                
                dispatch(changeDetail(data.title, data.content));
            })
            .catch(() => {
                console.log('err');
            })
    }
}
