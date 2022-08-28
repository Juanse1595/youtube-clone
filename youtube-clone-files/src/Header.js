import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from '@mui/material';


function Header() {
  return (
    <div className='header'>
      <MenuIcon />
      <img
        className='header__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
        alt='youtube-logo' />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar
        alt="profile-button"
        src="https://avatars.githubusercontent.com/u/85318393?s=400&u=b564d5fe1d357e061a59e5028348bcb5e570ab36&v=4"
      />
    </div>
  )
}

export default Header