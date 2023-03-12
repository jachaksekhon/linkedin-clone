import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { login } from './features/userSlice';
import { auth } from './firebase'
import './Login.css'


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
        return alert("Please enter a full name");
    }

    auth.createUserWithEmailAndPassword(email, password) //create username/password in the backend for us
    .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
            }))
        });
    }).catch(error => alert(error));
  };

  const logIntoApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
        }));
    }).catch(error => alert(error));
  };

  return (
    <div className="login">
        <img src="https://mybcom.sauder.ubc.ca/sites/mybcom.sauder.ubc.ca/files/styles/panopoly_image_original/public/media/linkedin.png?itok=8kqWB2ad&c=1999f0c716dfafcc9c8ebc0f86db4438" alt="" />
    
        <form>
            <input 
                value={name} 
                onChange = {(e) => setName(e.target.value)}
                placeholder='Full name (required if registering)' 
                type="text" 
            />

            <input 
                value = {profilePic} 
                onChange = {(e) => setProfilePic(e.target.value)}
                placeholder='Profile picture URL (optional)' 
                type="text" />

            <input 
                value = {email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email Address' 
                type="email" 
            />

            <input
                value = {password} 
                onChange = {(e) => setPassword(e.target.value)} 
                placeholder='Password' 
                type="password" 
            />

            <button type='submit' onClick={logIntoApp}>Sign in</button>
        </form>

        <p>
        Not a member?
        <span className='login__register' onClick={register}> Register Now!</span>    
        </p>

    </div>
  )
}

export default Login