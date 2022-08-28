import React from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from '@mui/material';


function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          className='header__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
          alt='youtube-logo' />
      </div>

      <div className='header__input'>
        <input type="text" placeholder='Search'/>
        <SearchIcon className='header__inputButton'/>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar
          alt="profile-button"
          src="https://avatars.githubusercontent.com/u/85318393?s=400&u=b564d5fe1d357e061a59e5028348bcb5e570ab36&v=4"
        />
      </div>
    </div>
  )
}

export default Header