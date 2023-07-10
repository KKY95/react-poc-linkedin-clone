import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./css/post.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import TelegramIcon from '@mui/icons-material/Telegram';

const Post=forwardRef(({name, discription, message, photoURL},ref)=> {
    return (
        <div className='post' ref={ref}>
            <div className='post-header'>
                <div className='post-header-left'>
                    <Avatar src={photoURL}/>
                    <div className='post-profile-details'>
                        <h3>{name}</h3>
                        <p>{discription}</p>
                    </div>
                </div>
                <div className='post-header-right'>
                    <MoreHorizIcon />
                </div>
            </div>
            <div className='post-body'>
                <p>{message}</p>
            </div>
            <div className='post-footer'>
                <div className='post-footer-options'>
                    <ThumbUpOffAltIcon />
                    <span>Like</span>
                </div>
                <div className='post-footer-options'>
                    <CommentIcon />
                    <span>Comment</span>
                </div>
                <div className='post-footer-options'>
                    <RepeatIcon />
                    <span>Repost</span>
                </div>
                <div className='post-footer-options'>
                    <TelegramIcon />
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
})

export default Post
