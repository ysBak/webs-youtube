import React from 'react'

import { itText } from '../../data/it'
import { Link } from 'react-router-dom'

const IT = () => {
  return (
      <section id='it'>
        <h2>😮 IT</h2>
          <div className="video__inner">
              {itText.map((video, key) => (
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

export default IT