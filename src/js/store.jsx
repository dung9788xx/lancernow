import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import mySaga from './saga'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()
const  store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)
export default store;
