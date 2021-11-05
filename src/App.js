import Header from './components/Header'
import AdminCreate from './pages/AdminCreate'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import { Login, Signup } from './pages/Auth'
import { Route, useHistory } from 'react-router-dom'
import getUser from '@/hooks/getUser'
import React from 'react'
import LikedRestaraunts from './pages/LikedRestaraunts'

function App() {
	const history = useHistory()
	const { user } = getUser()

	React.useEffect(() => {
		if (!user) {
			history.push('/auth/login')
		}
	}, [user] //перевызывать
	)

	return (
		<div className='App'>
			{!user ? (
				<>
					<Route path='/auth/login' render={() => <Login />} />
					<Route path='/auth/sign-up' render={() => <Signup />} />
				</>
			) : (
				<>
					<Header />
					<PrivateRoute path='/create/restaraunt'>
						<AdminCreate />
					</PrivateRoute>
					<PrivateRoute exact path='/'>
						<Home />
					</PrivateRoute>
					<PrivateRoute path='/profile/liked/restaraunts'>
						<LikedRestaraunts />
					</PrivateRoute>
				</>
			)}
		</div>
	)
}

export default App
