import React from 'react'
import RestarauntItem from '@/components/RestarauntItem'
import Preloader from '../../components/Preloader'
import { useDispatch } from 'react-redux'
import { setLikedRestarauntsFirebase } from './actions'
import { useSelector } from 'react-redux'

const LikedRestaraunts = () => {
	const dispatch = useDispatch()
	const { likedRestaraunts } = useSelector((state) => state.likedRestarauntsReducer)

	React.useEffect(() => {
		dispatch(setLikedRestarauntsFirebase())
	}, [])

	return (
		<section className='section'>
			<div className='container'>
				<div className='home__restaraunts'>
					{likedRestaraunts.length ? (
						likedRestaraunts.map((restaraunt) => {
							return <RestarauntItem {...restaraunt} key={restaraunt.id} />
						})
					) : (
						<Preloader />
					)}
				</div>
			</div>
		</section>
	)
}

export default LikedRestaraunts
