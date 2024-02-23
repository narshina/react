import React, { useState } from 'react'

export const State = () => {
    const [count,setcount]=useState(0)
    const [data,setdata]=useState([])
    let increment=()=>{
      setcount(count+1)
    }
    let decrement=()=>{
      if(count!=0)
      setcount(count-1)
    }
    let Adddata=()=>{
      setdata([
        {
          name:'abc',
          age: '45'
        },
        {
          name:'fgh',
          age:'67'
        }
      ])
    }
  return (
    <div>
      <h3>{count}</h3>
      {data.map((item)=>(
        <div>
          <h2>{item.name}</h2>
          <h2>{item.age}</h2>
          </div>
      ))}
        <button onClick={increment}>increment</button><br></br>
        <button onClick={decrement}>decrement</button><br></br>
        <button onClick={Adddata}>add data</button>
    </div>
  )
}
