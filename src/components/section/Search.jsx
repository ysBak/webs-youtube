// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Search = () => {
//     const [searchKeyword, setSearchKeyword] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = () => {
//         console.log(searchKeyword)
//         if (searchKeyword) {
//             navigate(`/search/${searchKeyword}`);
//             setSearchKeyword('');
//         }
//     };

//     return (
//         <div id='search'>
//             <div className='search__inner'>
//                 <label htmlFor='searchInput'>
//                     <span className='ir'>検索</span>
//                 </label>
//                 <input 
//                     type='search' 
//                     id='searchInput' 
//                     placeholder='検索ワードを入力してください。' 
//                     autoComplete='off' 
//                     className='search__input' 
//                     onChange={e => setSearchKeyword(e.target.value)}
//                     onKeyDown={e => {
//                         if (e.key === 'Enter') {
//                             handleSearch();
//                         }
//                     }}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Search

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword);
        if(searchKeyword){
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>検索</span>
                </label>
                <input 
                    type='search' 
                    name='searchInput' 
                    id='searchInput' 
                    autoComplete='off'
                    className='search__input'
                    placeholder='検索ワードを入力してください。'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter'){
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Search