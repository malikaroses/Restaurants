import { SET_LIKE_RESTARAUNT } from './actionTypes'
import useDoc from '@/hooks/useDoc.js'
import getUser from '@/hooks/getUser'
import getCollection from '@/hooks/getCollection'

export const setLikeRestaraunt = (likedRestaraunt) => ({
	type: SET_LIKE_RESTARAUNT,
	payload: likedRestaraunt,
})

export const setLikeRestarauntFirebase = (id) => async (dispatch) => {
	const { user } = getUser()
	const { updateDoc } = useDoc('users', user.uid)

	const { documents } = await getCollection('users')

	const myProfile = documents.find((doc) => doc.id === user.uid)

	if (myProfile.likedRestaraunts.includes(id)) {
		await updateDoc({
			likedRestaraunts: myProfile.likedRestaraunts.filter((likedId) => likedId !== id),
		})
	} else {
		await updateDoc({ likedRestaraunts: [...myProfile.likedRestaraunts, id] })
	}
	dispatch(setLikeRestaraunt(myProfile.likedRestaraunts))
}

