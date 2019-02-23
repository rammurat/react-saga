import {all, fork} from 'redux-saga/effects'

import * as homePageSagas from './home'
import * as pspPageSagas from './psp'

export default function* rootSaga() {
    yield all([...Object.values(homePageSagas), ...Object.values(pspPageSagas)].map(fork))
}