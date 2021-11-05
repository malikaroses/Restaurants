import React from 'react'
import { filterCategory, setCategory } from './actions'
import { useDispatch } from 'react-redux'

const Item = ({ type, icon, activeItem, setActiveItem, index }) => {
	const dispatch = useDispatch()

	const handeClick = () => {
		setActiveItem(index)
		dispatch(filterCategory(type))
	}

	return (
		<li onClick={handeClick} className={`categories__item ${activeItem === index ? 'active' : ''}`}>
			<img src={icon} alt={type} />
			<span>{type}</span>
		</li>
	)
}

export default Item
