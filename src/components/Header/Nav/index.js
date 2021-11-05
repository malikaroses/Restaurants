import React from 'react'
import Item from './Item'
import './styles.scss'

const Nav = () => {
	const navItems = ['Restaurants', 'Cuisines', 'Delivery', 'Contacts']

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				{navItems.map((text) => (
					<Item text={text} key={text} />
				))}
			</ul>
		</nav>
	)
}

export default Nav
