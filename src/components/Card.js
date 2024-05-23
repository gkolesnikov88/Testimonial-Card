import React from 'react';
import reactLogo from "./logo.svg"

export default function Card({
  text = "Lorem",
  name = "Lorem",
  tag = "Lorem",
  logo = reactLogo,
}) {
  return (
    <div className='card'>
        <div className='card-profile'>
            <div className='profile-icon'>
                <img src={logo} alt="avatar"/>
            </div>
            <div className='profile-data'>
                <div className='profile-name'>{name}</div>
                <div className='profile-link'>{tag}</div>
            </div>
        </div>
        <p className='card-text'>
          {text}
        </p>
    </div>
  )
}
