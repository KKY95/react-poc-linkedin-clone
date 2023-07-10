import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import "./css/feed.css"
import Post from './Post';
import { db } from './base';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user=useSelector(selectUser)

    const [posts, setPost] = useState([]);
    const [input, setInput] = useState();
    const submitPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            discription: "this is test",
            message: input,
            photoURL:user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className='feed'>
            <div className='feed-input'>
                <div className='feed-form'>
                    <Avatar src={user.photoURL}/>
                    <form onSubmit={submitPost}>
                        <input type='text' placeholder='Start a post' value={input} onChange={(e) => setInput(e.target.value)} />
                        <input type='submit' />
                    </form>
                </div>
                <div className='feed-options'>
                    <div className='options'>
                        <PhotoIcon style={{ color: "#70b5f9" }} />
                        <span>Photo</span>
                    </div>
                    <div className='options'>
                        <SmartDisplayIcon style={{ color: "#7fc15e" }} />
                        <span>Video</span>
                    </div>
                    <div className='options'>
                        <EventIcon style={{ color: "#e7a33e" }} />
                        <span>Event</span>
                    </div>
                    <div className='options'>
                        <ArticleIcon style={{ color: "#fc9295" }} />
                        <span>Write article</span>
                    </div>
                </div>
            </div>

            <FlipMove>
            {
                posts.map(({ id, data: { name, discription, message, photoURL } }) => {
                    return <Post key={id} name={name} discription={discription} message={message}
                        photoURL={photoURL} />
                })
            }
            </FlipMove>
            
        </div >
    )
}

export default Feed