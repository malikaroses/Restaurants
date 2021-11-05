import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const useSignup = async (email, password, name) => {
	let response
	let error

	try {
		response = await createUserWithEmailAndPassword(auth, email, password)
		await updateProfile(auth.currentUser, { displayName: name })
		return response
	} catch (err) {
		error = err.message
	}

	return { response, error }
}

export default useSignup
