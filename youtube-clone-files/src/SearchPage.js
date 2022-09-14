import React from 'react';
import './App.css'
// components
import Header from './Header';
import SearchResult from './SearchResult';
import Sidebar from './Sidebar';

function SearchPage() {
  return (
    <>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <SearchResult />
      </div>
    </>
  )
}

export default SearchPage