import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getAllUsers } from "../redux/actions/userActions";
const Users = lazy(() => import("../pages/Users"));
const User = lazy(() => import("../pages/User"));
const AddUser = lazy(() => import("../pages/AddUser"));

const UsersModule = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<Users />} />
			<Route path="add" element={<AddUser />} />
			<Route path=":userId" element={<User />} />
		</Routes>
	);
};

export default UsersModule;
