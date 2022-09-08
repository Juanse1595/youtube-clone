import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function MainPage() {
  return (
    <>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </>
  )
}

export default MainPage