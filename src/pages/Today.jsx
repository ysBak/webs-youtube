import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { Link } from 'react-router-dom'
import { todayText } from '../data/today'

const Today = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const todayPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
       title = "おすすめ動画"
       description="今日のおすすめ動画です。">
      
      <section id='todayPage'>
        <h2>🥰 今日のおすすめ動画です。</h2>
        {todayText.map((today, key) => (
               <div className='today__inner' key={key}> 
                 <div className='today__thumb play__icon'>
                  <Link to={today.page}>
                       <img src={today.img} alt={today.title} />
                 </Link>
               </div>
               <div className='today__text'>
                 <span className='today'>today!</span>
                 <h3 className='title'>
                   <Link to={today.title}>
                     {today.title}
                   </Link>
                 </h3>
                 <p className='desc'>{today.desc}</p>
                 <div className='info'>
                   <span className='author'>
                   <Link to={`/channel/${today.channelID}`}>
                   {today.author}
                   </Link>
                   </span>
                   <span className='date'>{today.date}</span>
                 </div>
               </div>
             </div>
        ))}
      </section>
    </Main>
  )
}

export default Today