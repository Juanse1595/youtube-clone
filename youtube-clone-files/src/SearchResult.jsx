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

      <ChannelRow
        image="https://avatars.githubusercontent.com/u/85318393?s=400&u=b564d5fe1d357e061a59e5028348bcb5e570ab36&v=4"
        channel="Juanse1595"
        verified
        subs="∞"
        noOfVideos={0}
        description="Leaning, dreaming, progressing, smiling. Software Developer from Cali, Colombia"
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
        views="88K"
        subs="123"
        description="For anyone who grew up on these games 0:00 Final Fantasy VII - Main Theme 4:19 Final Fantasy VII - Tifa's Theme ..."
        timestamp="6 months ago"
        channel="Kyle B"
        title="Relaxing And Calm JRPG SquareSoft Music - Final Fantasy / Kingdom Hearts / Chrono Trigger/Cross"
        image="https://i.ytimg.com/vi/04P5WOSZOTg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZNzKWatrbCTPT80Gvt5e2QIwT8g"
      />
      <VideoRow
        views="3.3M"
        subs="14.4M"
        description="Set out on an epic and unflinching journey as Kratos and Atreus struggle with holding on and letting go. Witness the changing ..."
        timestamp="1 day ago"
        channel="PlayStation"
        title="God of War Ragnarök - State of Play Sep 2022 Story Trailer | PS5 & PS4 Games"
        image="https://i.ytimg.com/vi/APVQM0iWyKc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhQPefVjpAfecZutaKfzZ8DIZs2w"
      />
      <VideoRow
        views="202K"
        subs="1.56M"
        description="Do you want a FREE oone hour training... check out this course"
        timestamp="1 day ago"
        channel="Fireship"
        title="PocketBase... The Ultimate Side-Hustle Backend?"
        image="https://i.ytimg.com/vi/Wqy3PBEglXQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsNmhRKUsjrlGBbnJ-h3OHPJ9y_A"
      />
    </div>
  )
}

export default SearchResult