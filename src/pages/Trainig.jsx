import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards'
import { trainingText } from '../data/training'

const Trainig = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

const trainingPageClass = loading ? 'isLoading' : 'isLoaded';



  return (
    <Main
    title = "トレーニング"
    description="トレーニング関連動画です。"
    >
     <section id='trainingPage' className={trainingPageClass}>
                <h2>😄 トレーニング</h2>
                <div className="video__inner">
                    <VideoCards videos={trainingText} />
                </div>
            </section>
    </Main>
  )
}

export default Trainig
