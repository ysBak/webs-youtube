import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import {musicText} from '../data/music'
const Music = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

const musicPageClass = loading ? 'isLoading' : 'isLoaded';


  return (
    <Main 
    title = "音楽"
    description="音楽関連動画です。">
    <section id='musicPage' className={musicPageClass}>
    <h2>音楽</h2>
    <div className="video__inner">
                <VideoCards videos={musicText} />
            </div>
  </section>
    </Main>
  )
}

export default Music
