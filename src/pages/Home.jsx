import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { developerText } from '../data/developer'
import { itText } from '../data/it'
import { japText } from '../data/jap'
import { trainingText } from '../data/training'
import { baseballText } from '../data/baseball'
import { musicText } from '../data/music'

const Home = () => {
  return (
    <Main 
      title="ヨンサム Youtube" 
      description="Welcome ヨンサム Youtube Page" 
    >
      <Today/>
      <Developer videos={developerText} title="👍 おすすめチャンネル" id='developer' />
      <VideoSlider videos={itText} title="💻 IT" id="it" />
      <VideoSlider videos={japText} title="🎌 日本語" id="jpa" />
      <VideoSlider videos={trainingText} title="💪 トレーニング" id="training" />
      <VideoSlider videos={baseballText} title="⚾ 野球" id="baseball" />
      <VideoSlider videos={musicText} title="🎵 音楽" id="music" />
    </Main>

  )
}

export default Home