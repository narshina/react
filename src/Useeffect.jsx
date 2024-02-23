import React, { useEffect, useState } from 'react'

export const Useeffect = () => {
    const[count,setcount]=useState(0)
    const[count1,setcount1]=useState(0)
    useEffect(()=>{
        console.log('in mounting phase');
    },[])
    useEffect(()=>{
        return()=>{
            console.log('in unmounting phase');
        }
    },[])
    useEffect(()=>{
        console.log(count);
    },[count,count1])
    let increment=()=>{
        setcount(count+1)
    }
    let increment1=()=>{
        setcount1(count1+1)
    }
  return (
   <>
   <div>{count}</div>
    <button onClick={increment}>increment</button>
    <button onClick={increment1}>increment1</button>
   </>
  )
}
