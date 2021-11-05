import React from 'react'
import placeIcon from './icons/place.svg'
import './styles.scss'

const City = () => {
	return (
		<div className='header-city'>
			<img src={placeIcon} alt='New York' />
			<span>Bishkek</span>
			<svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M9.4625 0.292486L5.5825 4.17249L1.7025 0.292486C1.51567 0.105233 1.26202 0 0.9975 0C0.732982 0 0.479331 0.105233 0.2925 0.292486C-0.0975 0.682486 -0.0975 1.31249 0.2925 1.70249L4.8825 6.29249C5.2725 6.68249 5.9025 6.68249 6.2925 6.29249L10.8825 1.70249C11.2725 1.31249 11.2725 0.682486 10.8825 0.292486C10.4925 -0.0875144 9.8525 -0.0975144 9.4625 0.292486Z'
					fill='#C3CAD9'
				/>
			</svg>
		</div>
	)
}

export default City
