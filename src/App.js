import React, {Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const IT = lazy(() => import('./pages/IT'));
const Jap = lazy(() => import('./pages/Jap'));
const Trainig = lazy(() => import('./pages/Trainig'));
const Baseball = lazy(() => import('./pages/Baseball'));
const Music = lazy(() => import('./pages/Music'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
  useEffect(() => {
    // 여기에 콘솔 로그 추가
    console.log('API Key:', process.env.REACT_APP_YOUTUBE_API_KEY);
}, []);
    return (
      <BrowserRouter>
        <Suspense fallback={<Main/>}>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/today' element={<Today/>}/>
          <Route path='/developer' element={<Developer/>}/>
          <Route path='/it' element={<IT/>}/>
          <Route path='/jap' element={<Jap/>}/>
          <Route path='/training' element={<Trainig/>}/>
          <Route path='/baseball' element={<Baseball/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/channel/:channelId' element={<Channel/>}/>
          <Route path='/video/:videoId' element={<Video/>}/>
          <Route path='/search/:searchId' element={<Search/>}/>
          <Route path='/*' element={<Not/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
    )
  }
  
  export default App