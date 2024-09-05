import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { japText } from '../data/jap'

const Jap = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const japPageClass = loading ? 'isLoading' : 'isLoaded';


  return (
    <Main 
    title = "日本語"
    description="日本語関連動画です。">
      <section id='japPage' className={japPageClass}>
            <h2>日本語</h2>
            <div className="video__inner">
              <VideoCards videos={japText} />
            </div>

      </section>
    </Main>
  )
}

export default Jap
