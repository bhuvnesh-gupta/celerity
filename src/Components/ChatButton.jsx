import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import  "../Styles/Login.css";

const ChatButton = () => {

  const botButton = () => {
    alert('I am Your Voice Assistant')
  } 

  return (
    <div className='d-flex justify-content-end m-4'>
      <button id='chatbutton' onClick={botButton} className='btn btn-primary'>
      <FontAwesomeIcon className='message' icon={faMessage} />
      </button>
    </div>
  )
}

export default ChatButton
//  {/* <img src={chatIcon} alt="chatIcon" /> */}