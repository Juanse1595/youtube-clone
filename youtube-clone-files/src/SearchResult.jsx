import React from 'react';
import './SearchResult.css';
// components
import { ChannelRow } from './ChannelRow';
import { TuneOutlined } from '@mui/icons-material';
import VideoRow from './VideoRow';

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

      <hr />

      <VideoRow
        views="2.6M"
        subs="1.17M"
        description="Do you want a FREE oone hour training... check out this course"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLSFiZkG&rs=AOn4CLAskRCGislyFWegbAPDtCThTmqLjw"
      />
      <VideoRow
        views="2.6M"
        subs="1.17M"
        description="Do you want a FREE oone hour training... check out this course"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLSFiZkG&rs=AOn4CLAskRCGislyFWegbAPDtCThTmqLjw"
      />
      <VideoRow
        views="2.6M"
        subs="1.17M"
        description="Do you want a FREE oone hour training... check out this course"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLSFiZkG&rs=AOn4CLAskRCGislyFWegbAPDtCThTmqLjw"
      />
      <VideoRow
        views="2.6M"
        subs="1.17M"
        description="Do you want a FREE oone hour training... check out this course"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CLSFiZkG&rs=AOn4CLAskRCGislyFWegbAPDtCThTmqLjw"
      />
    </div>
  )
}

export default SearchResult