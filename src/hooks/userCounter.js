import {useCallback, useState} from 'react'

const useCounter=(initialCounter=10)=>{
     const [counter,setCounter]=useState(initialCounter);

     const decrement=useCallback(()=>{
         if (counter > 0) setCounter((oldCounter)=>oldCounter-1);},[counter]);
         const reset=useCallback(()=>setCounter(initialCounter),[initialCounter])
        return [counter,decrement,reset];

     }
     
export default useCounter;