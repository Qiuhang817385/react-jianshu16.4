import * as actionTypes from './actionTypes'; 
export const handleFocusAction = ()=>{
    return {
        type:actionTypes.HANDLE_FOCUS
    }
}
export const handleBlurAction = ()=>{
    return {
        type:actionTypes.HANDLE_BLUR
    }
}
