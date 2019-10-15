import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
            height:58px;
            border-bottom:1px solid #f0f0f0;
            z-index:10;
            `;
export const Logo = styled.a.attrs({
    href: '/'
})`
            display: block;
            position:absolute;
            top:0;
            left:0;
            width:100px;
            height:56px;
            background:url(${logoPic}) no-repeat ;
        background-size:contain;
    `;

// 写url ../这个方式不好用
// background:url('');
export const Nav = styled.div`
    width:960px;
    margin: 0 auto;
    height:100%;
    // background:#ddd;
    padding-right:70px;
    box-sizing:border-box;
`
export const NavItem = styled.div`
    &.left{
        float:left
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    padding:0 15px;
    color:#333;
    line-height:56px;
    font-size:17px;
`
//   height:56px;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})` 
    margin-top:9px;
    // position:absolute;
    // top:50%;
    // margin-top:-19px;
   
    margin-left:20px;
    padding:0 40px 0  20px;
    box-sizing:border-box;
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:15px;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`
// outline定义轮廓
export const Addition = styled.div`
position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.written{
        color:#fff;
        background:#ec6149;
    }
`
export const SearchWrapper = styled.div`
        // background:#ddd;
        float:left;
        height:58px;
        position:relative;
       
        .zoom{
            width:30px;
            height:30px;
            position:absolute;
            top:50%;
            margin-top:-15px;
            right:5px;
            line-height:30px;
            border-radius:15px;
            text-align:center;
            &.focused{
                background:#aaa;
                color:#fff;
            }
        }
    `

// 搜索下拉
export const SearchInfo = styled.div`
        z-index:10;
        position:absolute;
        left:0;
        top:59px;
        width:240px;
        // height:200px;
        padding:0 20px;
        background:#fff;
        box-shadow:0 0 8px rgba(0,0,0,0.2)
    `
export const SearchInfoTitle = styled.div`
        margin-top:20px;
        margin-bottom:15px;
        line-height:20px;
        font-size:15px;
        color:#969696;
    `
    // 注意位置和目录位置

export const SearchInfoSwitch = styled.span`
        float:right;
        font-size:13px;
        cursor:pointer;
        // SearchInfoSwitch的子元素是span span有一个class是spin
        .spin{
            display:block;
            float:left;
            font-size:12px;
            margin-right:10px;
            transition:all .2s ease-in;
            transform:rotate(0deg);
            transform-origin:center center;
        }
    `
export const SearchInfoItem = styled.a`
        display:block;
        float:left;
        font-size:12px;
        line-height:20px;
        padding:0 5px;
        border:1px solid #ddd;
        color:#979797;
        border-radius:3px;
        margin:0 24px 13px 0;
        box-shadow:0 0 2px rgba(0,0,0,0.3)

`
export const SearchInfoList = styled.div`
        overflow:hidden;
`