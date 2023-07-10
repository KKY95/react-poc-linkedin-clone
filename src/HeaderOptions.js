import React from 'react'
import "./css/header.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import firebase from "firebase"

function HeaderOptions({ Icon, title}) {

  const user=useSelector(selectUser)
  return (
    <div className='header-options'>
      <Icon src={user.photoURL} onClick={(e)=>firebase.auth().signOut()}/>
      {title}
    </div>
  )
}

export default HeaderOptions
