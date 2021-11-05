import { GET_RESTARAUNTS } from './actionTypes'
import getCollection from '@/hooks/getCollection'

export const getRestaraunts = (restaraunts) => ({
	type: GET_RESTARAUNTS,
	payload: restaraunts,
})

export const getRestarauntsFirebase = () => async (dispatch) => {
	const { documents, error } = await getCollection('restaraunts')
	dispatch(getRestaraunts(documents))
}
