import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import birdsData from '../js/birdsData.js'

const Player = () => (
  <AudioPlayer
    src={birdsData[0][1].audio}
  />
);

export default Player