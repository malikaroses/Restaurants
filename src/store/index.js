import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import categoryReducer from '@components/Categories/reducer.js'
import restarauntItemReducer from '@components/RestarauntItem/reducer.js'
import restarauntsReducer from '@/pages/Home/reducer'
import thunk from 'redux-thunk'
import likedRestarauntsReducer from '@/pages/LikedRestaraunts/reducer'


const reducers = combineReducers({
	restarauntsReducer,
	categoryReducer,
	restarauntItemReducer,
	//likedRestarauntsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store