import React from 'react'

import { baseballText } from '../../data/baseball'
import { Link } from 'react-router-dom'

const Baseball = () => {
  return (
    <section id='baseball'>

    <h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
    <div className='video__inner'> 
      {baseballText.map((video, key) =>(
       <div className='video' key={key}>
          <div className="video__thumb play__icon">
             <Link to={`/video/${video.videoId}`}>
                  <img src={video.img} alt={video.title} />
            </Link>
          </div>
         </div>
    ))}
    </div>
    </section>
  )
}

export default Baseball