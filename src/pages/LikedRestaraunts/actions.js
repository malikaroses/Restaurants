import { SET_LIKED_RESTARAUNTS } from './actionTypes'
import getUser from '@/hooks/getUser'
import getCollection from '@/hooks/getCollection'

export const setLikedRestaraunts = (likedRestaraunts) => ({
	type: SET_LIKED_RESTARAUNTS,
	payload: likedRestaraunts,
})

export const setLikedRestarauntsFirebase = () => async (dispatch) => {
  const { user } = await getUser()

	const { documents } = await getCollection('users')
  
	const myProfile = documents.find((doc) => doc.id === user.uid)

	const { documents: restaraunts } = await getCollection('restaraunts')

	const likedRestaraunts = restaraunts.filter((restaraunt) => {
		return myProfile.likedRestaraunts.includes(restaraunt.id)
	})
	dispatch(setLikedRestaraunts(likedRestaraunts))
}
