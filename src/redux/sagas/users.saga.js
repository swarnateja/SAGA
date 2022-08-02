import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
// import { buyMobile, sellMobile, getAllUsers } from "../actions/mobile-action";

function* getAllUsers() {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: "GET_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "GET_USER_FAILED", message: error.message });
  }
}

function* sellMobile() {
  yield put({ type: "SELL_MOBILE_SUCCESS" });
}

function* buyMobile() {
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}

export function* watchUsers() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile),
    takeLatest("SELL_MOBILE", sellMobile),
    takeLatest("GET_ALL_USERS", getAllUsers)
  ]);
}
