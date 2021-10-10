import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware, {ThunkAction} from "redux-thunk";
import mapReducer from "./reducer/map-reducer";


let rootReducer = combineReducers({
    map: mapReducer
})



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store