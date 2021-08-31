import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./rootreducer";

export const Store = createStore(rootReducer, applyMiddleware(thunk));