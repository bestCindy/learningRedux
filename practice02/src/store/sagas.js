import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getMyListAction } from "./actionCreator";
import axios from "axios";


//固定语法 generator 函数
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getList);
}
function* getList() {
    const res = yield axios.get("url");
    const action = getMyListAction(res.data);
    yield put(action);
}


export default mySaga