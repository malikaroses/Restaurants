import React from 'react'
import searchIcon from './icons/search.svg'
import './styles.scss'
const Search = () => {
	return (
		<div className='header-search'>
			<img src={searchIcon} alt='search' />
			<input type='text' placeholder='Search ...' />
		</div>
	)
}

export default Search
