import React from 'react'
import { useParams } from 'react-router-dom'
import useDoc from '@/hooks/useDoc'

const Restaurant = () => {
    const {id}= useParams()
    const {getDocument}= useDoc('restaraunts', id)
const 

    return (
        <div className="section">
            <div className="container"></div>
        </div>
    )
}

export default Restaurant
