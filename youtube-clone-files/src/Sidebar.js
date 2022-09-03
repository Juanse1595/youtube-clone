import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbsUpAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2>This is the sidebar</h2>
      <SidebarRow selected title='Home' Icon={HomeIcon} />
      <SidebarRow title='Trending' Icon={WhatshotIcon} />
      <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
      <hr />
      <SidebarRow title='Library' Icon={VideoLibraryIcon} />
      <SidebarRow title='History' Icon={HistoryIcon} />
      <SidebarRow title='Your videos' Icon={OndemandVideoIcon} />
      <SidebarRow title='Watch Later' Icon={WatchLaterIcon} />
      <SidebarRow title='Liked videos' Icon={ThumbsUpAltOutlinedIcon} />
      <SidebarRow title='Show more' Icon={ExpandMoreOutlinedIcon} />
      <hr />
    </div>
  )
}

export default Sidebar