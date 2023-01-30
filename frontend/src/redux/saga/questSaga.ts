import { takeEvery } from "redux-saga/effects";
import { FETCH_QUESET_LIST } from "../action/questAction";

function* fetchQuestList() {
    yield; // api 가져오기
    // put(상태 지정 action)
}

export function* questSaga() {
    yield takeEvery(FETCH_QUESET_LIST, fetchQuestList);
}
