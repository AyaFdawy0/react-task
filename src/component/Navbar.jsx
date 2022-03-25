import { Link } from "react-router-dom";

const style = {
	display: "flex",
	justifyContent: "space-around",
	padding: "10px 20px",
	backgroundColor: "lightblue",
};
const styleLink={
textDecoration: 'none' 
}
const Navbar = () => {
	return (
		<div style={style}>
			<Link to="/" style={styleLink}>Home</Link>
			<Link to="/about" style={styleLink}>About us</Link>
			<Link to="/users" style={styleLink}>Users</Link>
			<Link to="/users/add" style={styleLink}>Add New User</Link>
		</div>
	);
};

export default Navbar;
