import React from 'react'

import { japText } from '../../data/jap'
import { Link } from 'react-router-dom'

const Jap = () => {
  return (
    <section id='jap'>
    <h2>😛 日本語</h2>
      <div className="video__inner">
          {japText.map((video, key) => (
            <div className="video" key={key}>
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

export default Jap