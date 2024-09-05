import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: 48,
    },
    headers: {
        'X-RapidAPI-Key': '52a957e935msh88d3f805c8547c0p12ebbdjsnf745e2b78719',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
};