import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption"
import Post from "./Post"
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from "./firebase"
import firebase from 'firebase/compat/app';


function Feed() {

  const [input, setInput] = useState("");
  const[posts, setPosts] = useState([]);

  //   onSnapshot gives us a 'picture' of the collection of the posts
  //   everytime a post gets added, it will give us a snapshot
  //   An open parenthesis in an arrow function implies a return

  // once "Feed()" gets called, useEffect is run
  useEffect(() => {
    db.collection("posts")
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data(),
            }
        )))
    ))
  }, [])

  const sendPost = e => { /* e is short for "event" */
    e.preventDefault(); /* prevents the default behaviour of refreshing when submitting a post*/
    db.collection('posts').add({
        name: "Jachak Sekhon",
        description: "This is a test",
        message: input,
        photoUrl: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");

  };

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value = {input} onChange={ e=> setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
            </div>
        </div>
        {posts.map(({ id, data: {name, description, message, photoUrl } }) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
    </div>
  )
}

export default Feed