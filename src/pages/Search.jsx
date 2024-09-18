import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        console.log("searchId:", searchId);
        setVideos([]);
        fetchVidoes(searchId);
        setLoading(true);
    }, [searchId]);

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
            fetchVidoes(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "Youtube 検索"
            description="Youtube 検索 ページ">
            
            <section id='searchPage' className={searchPageClass}>
                <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
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