//定义模块
//部分依赖lodash中的join方法
import { join } from 'lodash';
//导出一个默认模块
export default function bar() {
    function component() {
        //创建DOM元素
        var element = document.createElement("h2");
        //使用join连接数组将结果写入元素的html中
        element.innerHTML = join(['Hello', 'Webpack', '!'], ' ');
        console.log('1111');
        return element;
    }
    console.log('2121');
    // 在body中添加子元素    
    document.body.appendChild(component());
}