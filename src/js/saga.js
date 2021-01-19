import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import callApi from "./services/callApi";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const user = yield callApi("https://6006b15c3698a80017de1d4d.mockapi.io/users");
        yield put({
            type:"SET_USER",
            payload:{username:'Dungtvxxxx'}
        });
    } catch (e) {
        yield put({
            type:"SET_USER",
            payload:{username:'Fail'}
        });
    }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;