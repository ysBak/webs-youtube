import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchID } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        console.log("searchID:", searchID);
        setVideos([]);
        fetchVidoes(searchID);
        setLoading(true);
    }, [searchID]);

    const fetchVidoes = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
        // fetchFromAPI(`search?part=snippet&type=video&q=vue.js&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((preVideos) => [...preVideos, ...data.items]);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
        if(nextPageToken){
            fetchVidoes(searchID, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage' className={searchPageClass}>
                <h2>🤠 <em>{searchID}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className='video__more'>
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search