import { firestore } from '@/firebase/config'
import { getDocs, collection, query, where } from 'firebase/firestore'

const getFiletedCollection = async (collectionName, category) => {
	let documents = []
	let error = null

	try {
		const queryData = query(
			collection(firestore, collectionName),
			where('filters', 'array-contains', category),
		)

		const filteredData = await getDocs(queryData)

		filteredData.forEach((doc) => {
			documents = [...documents, { id: doc.id, ...doc.data() }]
		})

		console.log(documents)
	} catch (err) {
		error = err.message
	}

	return { documents, error }
}

export default getFiletedCollection
