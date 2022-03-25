import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./middlewares/logger";
import rootreducer from "./reducers/rootreducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootreducer,
	composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
