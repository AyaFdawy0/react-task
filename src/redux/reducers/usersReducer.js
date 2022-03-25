import { GET_ALL_USERS, INCREMENT_USER_AGE, ADD_USER } from "../actionTypes";

const initialState = null;

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_USERS:
			return payload;
		case INCREMENT_USER_AGE:
			return state.map((u) =>
				u.id === payload ? { ...u, age: u.age ? u.age + 1 : 16 } : u
			);
		case ADD_USER:
			return [payload, ...state];
		default:
			return state;
	}
};

export default reducer;
