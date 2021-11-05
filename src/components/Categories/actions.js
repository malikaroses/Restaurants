import getFiletedCollection from '../../hooks/getFilteredCollection'
import { getRestaraunts } from '../../pages/Home/actions'
import { SET_CATEGORY } from './actionTypes'

export const setCategory = (text) => ({
	type: SET_CATEGORY,
	payload: text,
})

export const filterCategory = (category) => async (dispatch) => {
	const { documents } = await getFiletedCollection('restaraunts', category)
	dispatch(setCategory(category))
  dispatch(getRestaraunts(documents))
}
