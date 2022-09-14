import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./ChannelRow.css"

function ChannelRow({verified, image, channel, subs, noOfVideos, description}) {
  return (
    <div className="channelRow">
      <Avatar className='channelRow__logo' alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>{channel} {verified && <CheckCircleOutlineOutlined />}</h4>
        <p>{subs} subscribers * {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export { ChannelRow }