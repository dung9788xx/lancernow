import {START_PROGRESS, STOP_PROGRESS} from "../constansts/actionConst";

const intState = {
    isStart:false
}

const  progressReducer = (state = intState, action) => {
    if(action.type == START_PROGRESS) {
        return {
            ...state,
            isStart: true
        };
    }
    if(action.type == STOP_PROGRESS)
           return {
               ...state,
               isStart: false
           };
    return state;
}
export default  progressReducer;
