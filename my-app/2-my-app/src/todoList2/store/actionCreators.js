export const getInputChangeAction=(value)=>({
    type: 'change_input_value',
    value
})
export const btnSubAction=()=>({
    type:'add_to_List',
})
export const listDelAction=(index)=>({
    type:'del_List_Item',
    index
})