import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { trainigText } from '../data/trainig'

const Trainig = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

const trainigPageClass = loading ? 'isLoading' : 'isLoaded';



  return (
    <Main
    title = "トレーニング"
    description="トレーニング関連動画です。"
    >
     <section id='trainigPage' className={trainigPageClass}>
                <h2>😄 トレーニング</h2>
                <div className="video__inner">
                    <VideoCards videos={trainigText} />
                </div>
            </section>
    </Main>
  )
}

export default Trainig
