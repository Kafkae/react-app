import { call, put, takeLatest } from "redux-saga/effects";
import { addUsers, requestStart, requestError } from "../actions/actionUser";

function* fethUsers() {
    try {
      const users = yield call(() => {
        return fetch("https://jsonplaceholder.typicode.com/users").then(res =>
          res.json()
        );
      });
      yield put(addUsers(users));
    } catch (e) {
      yield put(requestError(e.message));
    }
  }

function* usersSaga() {
    yield takeLatest(requestStart().type, fethUsers)
}

export default usersSaga;

