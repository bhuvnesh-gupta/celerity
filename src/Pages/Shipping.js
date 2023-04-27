import React from 'react'
import LoginHeader from '../Components/LoginHeader'
import SearchBar from '../Components/SearchBar'
import shippingupdate from '../Assets/shippindupdate.png'
import SideBar from '../Components/SideBar'
import ButtonGroup from '../Components/ButtonGroup'
import List from '../Components/List'

const Shipping = () => {
    return (
        <div>
            <LoginHeader />
            <img src={shippingupdate} alt="Update" />
            <SearchBar />
            <div className='d-flex'>
            <SideBar />
            <ButtonGroup />
            </div>
            <List />
        </div>
    )
}

export default Shipping


