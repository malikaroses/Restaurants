import React, { useState } from 'react'
import addDoc from '@/hooks/addDoc.js'
import { useHistory } from 'react-router-dom'
import './styles.scss'

const AdminCreate = () => {
	const history = useHistory()
	const [restaraunt, setRestaraunt] = useState({
		name: '',
		isLiked: false,
		filters: [],
		price: 0,
		image: '',
		grade: 0,
		cookTime: 0,
	})
	const [filters, setFilters] = useState(['Шорпо'])
	const [testInput, setTestInput] = useState('')

	const handleAddCategory = (event) => {
		if (event.key === 'Enter') {
			setFilters((prev) => [...prev, testInput])
			setRestaraunt((prev) => ({ ...prev, filters: filters }))
			setTestInput('')
		}
	}
	const handleSubmit = async (event) => {
		event.preventDefault()
		await addDoc('restaraunts', restaraunt)
		history.push('/')
	}
	const handleChange = (event) =>
		setRestaraunt((prev) => ({ ...prev, [event.target.name]: event.target.value }))

	return (
		<section className='section create-restaraunt'>
			<div className='container'>
				<form onSubmit={handleSubmit} className='create-restaraunt__form'>
					<label>Имя Ресторана:</label>
					<input required onChange={handleChange} name='name' type='text' />
					<label>Средние цены:</label>
					<input required onChange={handleChange} name='price' type='number' />
					<label>Категории:</label>
					<input
						onChange={(event) => setTestInput(event.target.value)}
						name=''
						value={testInput}
						required
						name='filters'
						onKeyPress={handleAddCategory}
						type='text'
					/>
					<div>
						{filters.map((category) => {
							return <span key={category}>{category}</span>
						})}
					</div>
					<label>Картинка ресторана:</label>
					<input required onChange={handleChange} name='image' type='text' />
					<button>Создать</button>
				</form>
			</div>
		</section>
	)
}

export default AdminCreate
