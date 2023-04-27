import React from 'react'
import BookingHeader from '../Components/BookingHeader'
import update from '../Assets/Update.png'
import Grid from '../Components/Grid'
import '../Styles/Login.css'


const Booking = () => {
  return (
    <div>
      <BookingHeader />
      <img src={update} alt="Update" />
      <Grid />
      
    </div>
  )
}

export default Booking
