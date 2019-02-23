import { put, takeLatest } from "redux-saga/effects";

import { REQUEST_HOME_PAGE, receiveHomePage } from "../actions/home";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* homePage(action) {
  try {
    // do api call
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(receiveHomePage("Home page loaded with API!"));
  } catch (e) {
    yield put(receiveHomePage("Home page load fail!"));
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* homePageSaga() {
  yield takeLatest(REQUEST_HOME_PAGE, homePage);
}