import userReducer from "./user";
import progressReducer from "./progress";
import dialogReducer from "./dialog"
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    user: userReducer,
    progress:progressReducer,
    dialog:dialogReducer
});
export default rootReducer;
