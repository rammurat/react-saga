import { put, takeLatest } from "redux-saga/effects";

import { REQUEST_PSP_PAGE, receivePSPPage } from "../actions/psp";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* pspPage(action) {
  try {
    // do api call
    // const user = yield call(Api.fetchUser, action.payload.userId);
    yield put(receivePSPPage("PSP page loaded with API!"));
  } catch (e) {
    yield put(receivePSPPage("PSP page load fail!"));
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* sagaPSPPage() {
  yield takeLatest(REQUEST_PSP_PAGE, pspPage);
}