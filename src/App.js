import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUser } from './features/userSlice';
import { auth } from './base';

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(loginuser({
          email:userAuth.email,
                uid:userAuth.uid,
                photoURL:userAuth.photoURL,
                displayName:userAuth.displayName 
        }))
      }
      else{
          dispatch(logoutuser())
      }
    })
  },[])
  return (
    <>
      {
        !user ? (<Login/>) : (
          <div className='app-wrapper'>
            <Header />
            <div className='app-body'>
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>
        )
      }
    </>
  );
}

export default App;
