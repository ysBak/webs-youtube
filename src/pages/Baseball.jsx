import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import {baseballText} from '../data/baseball'

const Baseball = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

const baseballPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main 
    title = "野球"
    description="野球関連動画です。">
      <section id='baseballPage' className={baseballPageClass}>
        <h2>野球</h2>
        <div className="video__inner">
                    <VideoCards videos={baseballText} />
                </div>
      </section>
    </Main>
  )
}

export default Baseball
