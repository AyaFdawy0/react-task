import React, {memo,useCallback} from 'react';
import PropTypes from 'prop-types'

//import * as classes from '../styles/User.module.css';
//import { Fragment } from 'react'; -->wrapper 
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { incrementUserAge } from "../redux/actions/userActions";

const style={
    backgroundColor:"lightgray",
    margin:"10px auto",
    width:"70%",
    padding:"15px"
};

const User = (props) => {
    const { name, id, age, children } = props;
	const dispatch = useDispatch();

	const handleClick = useCallback(() => {
		dispatch(incrementUserAge(id));
	}, [dispatch, id]);


    return (
        <div style={style}>   
          <div>Hello, {name}</div>
           {/* <div>ID: {id}</div> */}
           <div>Age: {age}</div>
           {children}
           <button style={{width:"150px",height:"50px",margin:"10px"}} onClick={handleClick}>incremetAge</button>
           {/* <Task/> */}
           <Link to={`/users/${id}`}>
				<button>View Details</button>
			</Link>
        </div>
    );
};

User.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    id:([PropTypes.string,PropTypes.number]).isRequired,
    incrementUserAge:PropTypes.func.isRequired,
    isActive:PropTypes.bool,
}
User.defaultProps={
    isActive:true,
    age:15,
    name:"Anonymous user",
}
export default memo(User);
