import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'
import SquareIcon from '@mui/icons-material/Square';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user=useSelector(selectUser)
    return (
        <div className='sidebar'>
            <div className='sidebar-profile'>
                <img src='https://wallpapers.com/images/featured/6tgpche84avnjqvz.jpg' alt='profile image' />
                <div className='profile-details'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                    <p>Web Developer</p>
                </div>
                <div className='profile-details'>
                    <div className='profile-stats'>
                        <span>Who's viewed your profile</span>
                        <span className='stat-number'>20</span>
                    </div>
                    <div className='profile-stats'>
                        <span>Impressions of your post</span>
                        <span className='stat-number'>1370</span>
                    </div>
                </div>
                <div className='profile-details'>
                <div className='profile-stats'>
                    <span>Access exclusive tools & insights<br />
                        <SquareIcon/><b>Try Premium for free</b></span>
                </div>
                </div>
                <div className='profile-stats-bottom'>
                    <span><BookmarkIcon/><b>My Items</b></span>
                </div>
            </div>

            <div className='sidebar-recent'>
                <p>Recent</p>
                <div className='hashtag'>
                <p>Groups</p>
                <p>Events <AddIcon/></p>
                <p>Followed Hashtags</p>
                </div>
                <div className='discover-more'>
                    Discover more
                </div>
            </div>
        </div>
    )
}

export default Sidebar 
