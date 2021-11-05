import { firestore } from '@/firebase/config'
import { doc, updateDoc as update , getDoc} from 'firebase/firestore'

    const useDoc = (collectionName, id) => {
	const docRef = doc(firestore, collectionName, id)
	const updateDoc = async (value) => {
		try {
			await update(docRef, value)
		}
        catch (err) {
			console.log(err)
		}
	}




const getDoc = async(id)=>{
try{
const doc=await getDoc(id)
return doc
}
catch(err){

}
}

	return { updateDoc , getDoc}
}

export default useDoc
