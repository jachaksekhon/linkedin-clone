import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption.js'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={PeopleIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avatar="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" title="me"/>
        </div>


    </div>
  )
}

export default Header