import { createStore, applyMiddleware, compose } from "redux";
import rootRedcuer from "./reducers";
import thunk from "redux-thunk";

const intitalState = {};
const middlewares = [thunk];

const store = createStore(
    rootRedcuer,
    intitalState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
