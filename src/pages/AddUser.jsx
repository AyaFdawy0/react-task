import React from 'react';
import { useState, useCallback} from 'react';
import {v4 as uuid} from 'uuid'

const AddUser = () => {
    const [newUser,setNewUser]=useState({name:'',age:''});
    const [users,setUsers]=useState(null);

    const handleSubmit=useCallback((event)=>{
        event.preventDefault();
        setUsers(oldUsers=>[...oldUsers,{...newUser,age: +newUser.age,id:uuid()}]) //+ unary operator that convert string to number
        console.log('Form submitted');
     },[newUser])
 
     const handleChange=useCallback((event)=>{
         const {name,value}=event.target;
         setNewUser((oldUsers)=>({...oldUsers,[name]:value}))     //calculated property name
         console.log(event.target);
      },[])
    return (
        <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={newUser.name} onChange={handleChange} />
       Age: <input type="number" name="age" value={newUser.age} onChange={handleChange}/>
       <input type="submit" value="Add" />
    </form>
    );
};

export default AddUser;