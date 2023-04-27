import React from 'react'
import Origin from '../Global/Origin'
import Destination from '../Global/Destination'
import Calendar from '../Components/Calendar'
import Load from './Load'
import '../Styles/Login.css'


const SearchBar = () => {
  return (
  <div id='searchbar' class="d-flex">
    <Origin />
   <Destination />
   <Calendar />
   <Load />
  </div>
  )
}

export default SearchBar
