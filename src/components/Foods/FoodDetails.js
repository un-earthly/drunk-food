import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function FoodDetails() {
    const { id } = useParams();
    const [detailedFood, setDetailedFood] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(res => setDetailedFood(res.meals[0]))
    }, [])
    return (
        <div className='text-white'>
            FoodDetails : {console.log(detailedFood)}
        </div>
    )
}
