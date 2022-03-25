import axios from "axios";
import { INCREMENT_USER_AGE, GET_ALL_USERS, ADD_USER } from "../actionTypes";
import { startLoading, showSuccess, showError } from "./statusActions";

export const getAllUsers = () => (dispatch) => {
	dispatch(startLoading());
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((response) => {
			dispatch(getAllUsersSuccess(response.data));
			dispatch(showSuccess());
		})
		.catch((err) => {
			dispatch(showError(err.response.status));
		});
};

export const getAllUsersSuccess = (users) => ({
	type: GET_ALL_USERS,
	payload: users,
});

export const addUser = (user) => (dispatch) => {
	dispatch(startLoading());
	setTimeout(() => {
		dispatch(addUserSuccess(user));
		dispatch(showSuccess());
	}, 2000);
};

export const addUserSuccess = (user) => ({
	type: ADD_USER,
	payload: user,
});

export const incrementUserAge = (id) => ({
	type: INCREMENT_USER_AGE,
	payload: id,
});
