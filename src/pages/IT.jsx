import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { itText } from '../data/it'

const IT = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

const itPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main
    title = "IT"
    description="IT関連動画です。">
          <section id='itPage' className={itPageClass}>
                <h2>😄 IT</h2>
                <div className="video__inner">
                    <VideoCards videos={itText} />
                </div>
            </section>
    </Main>
  )
}

export default IT
