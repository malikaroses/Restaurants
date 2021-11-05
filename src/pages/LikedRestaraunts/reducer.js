import { SET_LIKED_RESTARAUNTS } from './actionTypes'
const initialState = {
	likedRestaraunts: [],
}

const likedRestarauntsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIKED_RESTARAUNTS: {
			return { ...state, likedRestaraunts: action.payload }
		}
		default:
			return state
	}
}

export default likedRestarauntsReducer
