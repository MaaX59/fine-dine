import {React, useRef, useState} from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
const [playVideo, setPlayVideo] = useState(false);

const videoRef = useRef();


  return (
  <div className='app__video'>
  <video 
    src={meal}
    type="video/mp4"
    loop
    muted
    controls={false}
    ref={videoRef}
  />
  <div className='app__video-overlay flex__center'>
    <div className='app__video-overlay_circle flex__center' > </div>
  </div>
    
  </div>
  )
  }

export default Intro;
