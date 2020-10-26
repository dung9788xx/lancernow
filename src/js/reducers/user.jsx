const intState = {
    username:'bbb',
    password:'cccc'
}

const  userReducer = (state = intState, action) => {

   switch (action.type) {
       case "LOGIN":{
           return {
               ...state,
               username: action.payload.username
           };
       }

   }
    return state;
}
export default  userReducer;
