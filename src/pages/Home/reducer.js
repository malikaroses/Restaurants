import { GET_RESTARAUNTS } from './actionTypes'

const initialState = {
	restaraunts: [],
}

const restarauntsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RESTARAUNTS: {
			return { ...state, restaraunts: action.payload }
		}
		default:
			return state
	}
}

export default restarauntsReducer
