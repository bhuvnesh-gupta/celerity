import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import SearchBar from '../Components/SearchBar';
import Services from '../Components/Services';
import ChatButton from '../Components/ChatButton';
import WaterWaves from '../Components/WaterWaves';
import  "../Styles/Login.css"

const WithoutLogin = () => {
  return (
    <div>
      <Header />
      <Content />
      <SearchBar />
      <Services />
      <ChatButton />
      <WaterWaves />
    </div>
  )
}

export default WithoutLogin
