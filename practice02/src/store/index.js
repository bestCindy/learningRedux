import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas"

const sagaMiddelware = createSagaMiddleware();

const store = createStore(
    reducer,
    // applyMiddleware(thunk)
    applyMiddleware(sagaMiddelware)
);

sagaMiddelware(mySaga);

export default store