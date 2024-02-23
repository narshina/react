import React from 'react'

export const Card = (props) => {
  return (
    <div className={`p-3 w-48  text-center h-48 ${props.cls}`}>
    <img src={props.image} className='w-20 h-20 m-auto rounded-[50%]' alt=""></img>
    <h2>{props.name}</h2>
    <h2>{props.position}</h2>
    </div>
  )
}
