import { START_LOADING, SHOW_SUCCESS, SHOW_ERROR } from "../actionTypes";

const initialState = {
	loading: false,
	hasError: false,
	errorStatus: null,
};

const statusReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case START_LOADING:
			return {
				...state,
				loading: true,
			};
		case SHOW_SUCCESS:
			return {
				...state,
				loading: false,
				hasError: false,
				errorStatus: null,
			};
		case SHOW_ERROR:
			return {
				...state,
				loading: false,
				hasError: true,
				errorStatus: payload,
			};
		default:
			return state;
	}
};

export default statusReducer;
