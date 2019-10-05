const defaultState = {
    // 现在仓库里面有两个默认的数据,由reducer管理,传回去给store存储在store
    inputValue: '',
    list: []
};
// 现在默认什么数据都没存储,给state赋值
// reducer可以接收state,但是绝对不能修改state,
// 因为数据是共享的
export default (state = defaultState, action) => {
    // state是数据,action是type的那句话
    // console.log(state,action);

    if (action.type === 'change_input_value') {
        // 深拷贝之前的state的数据返回
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }



    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === 'del_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
    // state指的是,整个图书馆所有数据的信息,整个仓库当中所有的数据

}