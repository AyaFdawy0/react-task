const logger = (store) => (next) => (action) => {
	console.log("STATE BEFORE ACTION", action.type, store.getState());
	return next(action);
};

export default logger;
