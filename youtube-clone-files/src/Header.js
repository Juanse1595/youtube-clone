import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to="/">
          <img
            className='header__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
            alt='youtube-logo'
          />
        </Link>
      </div>

      <div className='header__input'>
        <input
          type="text"
          placeholder='Search'
          value={inputSearch}
          onChange={event => setInputSearch(event.target.value)}
        />
        <Link to={`/search/${inputSearch ? inputSearch : ''}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>

      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt="profile-button"
          src="https://avatars.githubusercontent.com/u/85318393?s=400&u=b564d5fe1d357e061a59e5028348bcb5e570ab36&v=4"
        />
      </div>
    </div>
  )
}

export default Header