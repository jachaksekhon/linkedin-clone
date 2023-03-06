import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h2>Jachak Sekhon</h2>
            <h4>jachak.sekhon@hotmail.com</h4>

        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">5,102</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on posts</p>
                <p className="sidebar__statNumber">3,468</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("frontend")}
            {recentItem("backend")}
            {recentItem("programming")}
            {recentItem("developer")}
        </div>

    </div>
  )
}

export default Sidebar