import React, { useState } from 'react';
import {v4 as uuid} from 'uuid'
import User from './User';
 
const style={
    backgroundColor:"lightblue",
    margin:"10px auto",
    width:"100%",
    padding:"15px 5px"
};


const Users = () => {
    const [users,setUsers]=useState([
        {id:uuid(),name:'aya',age:23},
        {id:uuid(),name:'Mohamed',age:30},
        {id:uuid(),name:'aya',age:23}
    ]);
    const incrementUserAge=(userId)=>{
      setUsers((oldUsers)=>
     oldUsers.map((u)=>(u.id=== userId ? {...u,age:u.age+1}:u))
      )
    };
    return (
        <>
        <div style={style} >Users</div>
        <div>
            {users.map((user)=>(
                <User key={user.id} {...user} incrementUserAge={incrementUserAge} />
            ))}
        </div>
        </>
    );
};

export default Users;