import { SET_LIKE_RESTARAUNT } from './actionTypes'
const initialState = {
	likedRestaraunts: [],
}

const restarauntItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LIKE_RESTARAUNT: {
			return { ...state, likedRestaraunts: action.payload }
		}
		default:
			return state
	}
}

export default restarauntItemReducer
