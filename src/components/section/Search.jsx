import React from 'react'

const Search = () => {
  return (
    <div id='search'>
        <div className='search__inner'>
            <label htmlFor='searchInput'>
                <span className='ir'>検索 </span>
            </label>
            <input 
                type='search'
                name='searchInput'
                id='searchInput'
                autoComplete='off'
                className='search__input'
                placeholder='検索ワードを入力してください。'
            />


        </div>
    </div>
  )
}

export default Search