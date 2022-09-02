import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2>This is the sidebar</h2>
      <SidebarRow selected title='Home' Icon={HomeIcon} />
      <SidebarRow title='Trending' Icon={WhatshotIcon} />
      <SidebarRow title='Subscription' Icon={SubscriptionsIcon} />
    </div>
  )
}

export default Sidebar