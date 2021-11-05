import { firestore } from '@/firebase/config'
import { getDocs, collection } from 'firebase/firestore'

const getCollection = async (collectionName) => {
	let documents = []
	let error = null

	try {
		const myCollection = collection(firestore, collectionName)
		const data = await getDocs(myCollection)

		data.forEach((doc) => {
			documents = [...documents, { ...doc.data(), id: doc.id }]
		})

	} catch (err) {
		error = err.message
	}

	return { documents, error }
}

export default getCollection
