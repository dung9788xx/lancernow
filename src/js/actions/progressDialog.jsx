import {START_PROGRESS, STOP_PROGRESS} from "../constansts/actionConst";

export const startProgress = () => {
    return {
        type : START_PROGRESS
    }
}
export const stopProgress= () =>{
    return {
        type : STOP_PROGRESS
    }
}

