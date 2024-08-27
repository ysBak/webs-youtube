import React from 'react'
import Main from '../components/section/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
  return (
    <Main 
    title="おすすめチャンネル" 
    description="おすすめチャンネル Page" 
    >
      <section id='developer'>
      <h2>おすすめチャンネルの紹介です。</h2>
      <div className='developer__inner'>
        {developerText.map((developer, key) => (
          <div className='developer' key={key}>
            <div className='developer__img play__icon'>
              <Link to={`/chennel/${developer.chennelId}`}>
              <img src={developer.img} alt={developer.name} />
              </Link>
            </div>
            <div className='developer__info'>
              <Link to={`/chennel/${developer.chennelId}`}>
                  {developer.name}
              </Link>
          </div>
        </div>
        ))}
      </div>


      </section>
    </Main>
  )
}

export default Developer
