//纯函数
const defaultState = {
    inputValue3: '1',
    list: [],
}
export default (state = defaultState, action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue3 = action.value;
        return newState;
    }
    if (action.type === 'add_to_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue3);
        newState.inputValue3 = '';
        return newState;
    }
    if (action.type === 'del_li_list') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }
    return state;
}