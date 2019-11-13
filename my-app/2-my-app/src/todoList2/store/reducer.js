const defaultState = {
    inputValue:'',
    list:[]
}
export default (state=defaultState,action)=>{
    if(action.type === "change_input_value"){
        // console.log(action);
       const newState = JSON.parse(JSON.stringify(state));
       newState.inputValue = action.value;
       return newState;
       
    }
    if(action.type === "add_to_List"){
       const newState = JSON.parse(JSON.stringify(state));
       newState.list.push(newState.inputValue) ;
       newState.inputValue = '';
       return newState;
    }
    if(action.type === "del_List_Item"){
       const newState = JSON.parse(JSON.stringify(state));
       newState.list.splice(action.index,1);
       console.log(action.type);
       return newState;
       
    }

    return state;
}