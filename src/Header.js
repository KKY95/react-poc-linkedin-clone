import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./css/header.css"
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Header() {

  const user=useSelector(selectUser)
  return (
    <div className='header'>
        <div className='header-left'>
            <div className='header-logo' >
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png' alt='linkedin-logo'/>
            {/* <LinkedInIcon/> */}
            </div>
            <div className='header-search'>
            <SearchIcon/>
            <input type='text' placeholder='Search'/>
            </div>
        </div>
        <div className='header-right'>
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={GroupIcon} title="My Network"/>
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOptions Icon={SmsIcon} title="Messaging"/>
        <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
        <HeaderOptions Icon={Avatar} title={user.displayName}/>
        </div>
    </div>
  )
}

export default Header