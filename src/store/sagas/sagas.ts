import { put, takeLatest, all } from "redux-saga/effects";

function* loadInitdata() {
  const data = yield fetch("https://api.jikan.moe/v3/top/anime/1/upcoming").then(response => response.json());
  yield put({ type: "UPCOMING_SUCESS", data: data });
}

function* actionWatch() {
  yield takeLatest("LOAD_INIT_DATA", loadInitdata);
}

export default function* rootSaga() {
  yield all([actionWatch()]);
}
