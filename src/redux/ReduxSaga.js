import {all, takeEvery} from "redux-saga/effects"
import { fetchProducts } from "./actionCreator"
import { actions } from "./actionTypes"

function* watcherFetchUser() {
    yield takeEvery(actions.FETCH_USER, fetchUsers)
} 

export default function* rootSaga() {
    yield all([
      watcherFetchUser()
    ])
  }
