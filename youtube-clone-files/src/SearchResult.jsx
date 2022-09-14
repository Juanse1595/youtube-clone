import React from 'react';
import './SearchResult.css';
// components
import { ChannelRow } from './ChannelRow';
import { TuneOutlined } from '@mui/icons-material';

function SearchResult() {
  return (
    <div className='searchResult'>
      <div className="searchResult__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programer"
        verified
        subs="1.17M"
        noOfVideos={450}
        description="Awesome programers teaching, find here amazing lessons of programming in different languages..."
      />
    </div>
  )
}

export default SearchResult