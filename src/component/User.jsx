import React from 'react';
import PropTypes from 'prop-types'
import Task from './Task';
//import { Fragment } from 'react'; -->wrapper 
const style={
    backgroundColor:"lightgray",
    margin:"10px auto",
    width:"70%",
    padding:"15px"
};

const User = (props) => {
    const {name,id,age,incrementUserAge}=props;
    return (
        <div style={style}>   
          <div>Hello, {name}</div>
           {/* <div>ID: {id}</div> */}
           <div>Age: {age}</div>
           <button style={{width:"150px",height:"50px",margin:"10px"}} onClick={()=>incrementUserAge(id)}>incremetAge</button>
           <Task/>
        </div>
    );
};

User.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    id:PropTypes.number.isRequired,
    incrementUserAge:PropTypes.func.isRequired,
    isActive:PropTypes.bool,
}
User.defaultProps={
    isActive:true,
    age:23,
    name:"Anonymous user",
}
export default User;