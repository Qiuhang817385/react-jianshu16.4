import {fromJS} from 'immutable'
const initialState = fromJS({
    inputValue: '123',
    list: []
})

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'change_input_value_action':
            return state.set('inputValue', action.value);
        case 'handle_add_toList':
            return state.merge({
                list:state.get('list').push(state.get('inputValue')),
                inputValue:''
            });
        default:
            return state
    }
};
