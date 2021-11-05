import { useState } from 'react'
import { auth } from '../firebase/config'

const GetUser = () => {
	// const [user, setUser] = useState(auth.currentUser)
	let user = auth.currentUser

	auth.onAuthStateChanged((_user) => {
		// setUser(_user)
		user = _user
	})
	return { user }
}

export default GetUser
