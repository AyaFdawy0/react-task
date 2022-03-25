//import axios from "axios";
import React, {useEffect, useMemo } from "react";
import User from "./User";
import useCounter from "../hooks/userCounter";
import { useSelector } from "react-redux";

const style = {
  backgroundColor: "lightblue",
  margin: "10px auto",
  width: "100%",
  padding: "15px 5px",
};

const Users = () => {
  // const [users,setUsers]=useState([
  //     {id:uuid(),name:'aya',age:23},
  //     {id:uuid(),name:'Mohamed',age:30},
  //     {id:uuid(),name:'aya',age:23}
  // ]);
  //const [users,setUsers]=useState(null);
  // const [newUser,setNewUser]=useState({name:'',age:''})
  const [number, decrementNum, resetNum] = useCounter();
  const users = useSelector((state) => state.users);

  //SIMULATE componentDidMount
  // const [data,setData]=useState(null);

  // useEffect(()=>{
  //     console.log('Every Render');
  // })
  // useEffect(()=>{
  //     console.log('SIMULATE componentDidMount');

  //     return()=>{
  //         console.log('SIMULATE will unMount');

  //     }
  // },[])

  useEffect(() => {
    // console.log('First Render + users change');
    console.log("start interval");
    return () => {
      console.log("clear interval");
    };
  }, [users]);
  // useEffect(()=>{
  //     console.log('First Render + users or data change');
  // },[users,data])

  // const incrementUserAge=(userId)=>{
  //   setUsers((oldUsers)=>
  //  oldUsers.map((u)=>(u.id=== userId ? {...u,age:u.age?u.age+1:19}:u))
  //   )
  // };
  // useEffect(()=>{
  //     axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
  //         console.log(response)
  //         setUsers(response.data)
  //     })
  // },[])

  const adults = useMemo(
    () =>
      users?.filter((u) => {
        return u.age && u.age >= 18;
      }).length,
    [users]
  );
  console.log(adults);

  return (
    <>
      <div>
        <div>Number: {number}</div>
        <button onClick={decrementNum}>Decrement</button>
        <button onClick={resetNum}>Reset</button>
      </div>
      <div style={style}>Users (Adults: {adults})</div>

      <div>
        {users ? (
          users.map((user) => <User key={user.id} {...user} />)
        ) : (
          <div>Loooooooooooooding</div>
        )}
      </div>
    </>
  );
};

export default Users;

// const incrementUserAge=(userId)=>{
//     setUsers((oldUsers)=>
//    oldUsers.map((u)=>(u.id=== userId ? {...u,age:u.age?u.age+1:19}:u))
//     )
//   };
//   useEffect(()=>{
//       axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
//           console.log(response)
//           setUsers(response.data)
//       })
//   },[])

// return (
//     <>
//     <div>
//         <div>Number: {number}</div>
//         <button onClick={decrementNum}>Decrement</button>
//         <button onClick={resetNum}>Reset</button>

//     </div>
//     <div style={style} >Users (Adults: {adults})</div>

//     <div>
//         {users? users.map((user)=>(
//             <User key={user.id} {...user} incrementUserAge={incrementUserAge} />
//         )):<div>Loooooooooooooding</div>}
//     </div>
//     </>
// );
