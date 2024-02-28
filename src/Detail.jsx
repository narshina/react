import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const[data,setData]=useState('')
    const {id}=useParams()
    console.log(id);
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            console.log(response);
            setData(response.data)
        }
        fetchdata()
    },[])
  return (
    <div>
        <img src={data.Poster} alt="" />
        <h2>{data.Title}</h2>
        <h2>{data.Awards}</h2>
        <h2>{data.Year}</h2>
        <h2>{data.Rated}</h2>
        <h2>{data.Released}</h2>
    </div>
  )
}
