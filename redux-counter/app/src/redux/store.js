import {combineReducers, legacy_createStore, compose} from "redux"
import{reducerFun} from "./reducer.js"

const rootReducer = combineReducers({ReducerFun : reducerFun});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancer)