import React from 'react'
import Nav from './Nav'
import Search from './Search'
import City from './City'
import User from './User'
import './styles.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<a className='logo' href=''>
					Constructor
				</a>
				<div className='header__nav'>
					<Nav />
				</div>
				<Search />
				<City />
				<User />
			</div>
		</header>
	)
}

export default Header
