import React from 'react'
import { useParams } from 'react-router-dom'

export default function DrinksDetails() {
    const { id } = useParams();
    return (
        <div className='text-white'>DrinksDetails:{id}</div>
    )
}
