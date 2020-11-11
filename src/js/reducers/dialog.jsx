import messageConvert from "../services/messageConvert";

const intState = {
    message:'',
    isOpen:false
}

const  dialogReducer = (state = intState, action) => {

   switch (action.type) {
       case "OPEN_DIALOG":{
           return {
               ...state,
               message: messageConvert(action.payload),
               isOpen: true,
               forceLogin: action.forceLogin
           };
       }
       case  "CLOSE_DIALOG":{
           return {
               ...state,
               isOpen: false,
               forceLogin: false
           };
       }
   }
   return state;

}
export default  dialogReducer;
