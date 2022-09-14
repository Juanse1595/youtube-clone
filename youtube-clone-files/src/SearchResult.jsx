import React from 'react';
import './SearchResult.css';
// components
import { TuneOutlined } from '@mui/icons-material';

function SearchResult() {
  return (
    <div className='searchResult'>
      <div className="searchResult__filter">
        <TuneOutlined />
        <p>FILTER</p>
      </div>
    </div>
  )
}

export default SearchResult