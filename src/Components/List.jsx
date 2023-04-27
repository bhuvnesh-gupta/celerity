import React from 'react'
import  '../Styles/Login.css'
import  Frame29 from '../Assets/Frame 29.png'
import  Frame30 from '../Assets/Frame 30.png'
import { Link } from 'react-router-dom'


const List = () => {
  return (
    <>
    <div className='list mx-auto'>
        <Link to="/Booking"><img src={Frame29} alt="igg" /></Link>
        <Link to="/Booking"><img src={Frame30} alt="igg" /></Link>
        <Link to="/Booking"><img src={Frame29} alt="igg" /></Link>
        <Link to="/Booking"><img src={Frame30} alt="igg" /></Link>
        <Link to="/Booking"><img src={Frame29} alt="igg" /></Link>
        <Link to="/Booking"><img src={Frame30} alt="igg" /></Link>
        <Link to="/Booking"><img src={Frame29} alt="igg" /></Link>
        
      </div>
    </>
  )
}

export default List
