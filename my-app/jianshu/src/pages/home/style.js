import styled from 'styled-components';
export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px ;
    width:625px;
    float:left;
    // background:#aaa;
    .banner-img {
        width:625px;
        height:270px;
        border-radius:5px;
    }
    `;
export const HomeRight = styled.div`
    margin-left:15px;
    padding-top:30px ;
    width:280px;
    float:right;
    // background:#ddd;
`;
// topic组件
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    // background:#333;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    margin-left:18px;
    margin-bottom:10px;
    float:left;
    background:#f7f7f7;
    
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    
    // margin-right:20px;
    .topic-pic{
        display: block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
        
    }
`
export const TopicMore = styled.a`
    margin:0 18px;
    display:block;
    float:left;
    width:100px;
    height:32px;
    text-decoration:none;
    line-height:32px;
    font-size:13px;
    color:#777;
`

// list组件
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        float:left
        width:125px;
        height:100px;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
        display:block;
        float:left;
        width:500px;
        height:100px;
        .title{
            font-size:18px;
            font-weight:bold;
            line-height:27px;
            color:#333;
        }
        .desc{
            font-size:13px;
            // font-weight:bold;
            line-height:24px;
            color:#999;
        }
`
// **********Recommend
export const RecommendWrapper = styled.div`
        margin:0 0 30px 0;
        width:280px;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    // background:#bbb;
    background:url(${require("../img/1.png")}) no-repeat ;
    background-size:contain;
    margin:5px 0;
    
`
export const WriterWrapper = styled.div`
        width:278px;
        border:1px solid #dcdcdc;
        border-radius:3px;
        height:300px;
        line-height:300px;
        text-align:center;
`   