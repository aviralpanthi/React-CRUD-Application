import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
const navigate = useNavigate()
const {title} = useParams
const backHandler = ()=>{
    navigate(-1)
}

  return (
    <div>
        <h1 className="text-3xl" >👋{title}</h1>
        <button onClick={backHandler} >← Back</button>
    </div>
  )
}

export default Details