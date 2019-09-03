import { put, takeLatest, all } from "redux-saga/effects";

function* loadInitdata() {
  const data = yield fetch("https://api.jikan.moe/v3/top/anime/1/upcoming").then(response => response.json());
  yield put({ type: "UPCOMING_SUCESS", data});
}

function* loadSelectedAnimedata(action: {action: string, selectedAnime: number}) {
  const anime_id = action.selectedAnime;
  const selectedAnimeData = yield fetch("https://api.jikan.moe/v3/anime/"+anime_id).then(response => response.json());
  yield put({ type: "SELECT_ANIME_SUCCESS", selectedAnimeData});
}

function* actionWatch() {
  yield takeLatest("LOAD_INIT_DATA", loadInitdata);
  yield takeLatest("SELECT_ANIME_START", loadSelectedAnimedata);
}

export default function* rootSaga() {
  yield all([actionWatch()]);
}
