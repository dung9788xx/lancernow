const intState = {
    username:'',
    password:''
}

const  userReducer = (state = intState, action) => {

   switch (action.type) {
       case "LOGIN":{
           return {
               ...state,
               username: action.payload.username
           };
       }
       case "SET_USER":{
           return {
               ...state,
               username: action.payload.username
           }
       }
   }
    return state;
}
export default  userReducer;
