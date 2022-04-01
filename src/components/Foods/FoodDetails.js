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
            <h1 style={{ fontSize: '50px' }} className="text-center my-3 text-info">
                Food Details
            </h1>

            <div className='d-flex align-items-center justify-content-evenly my-5'>
                <div>
                    <h2>Requirements</h2>
                    <p>{detailedFood.strArea} {detailedFood.strMeal}</p>
                    <p>{detailedFood.strIngredient1}  {detailedFood.strMeasure1}</p>
                    <p>{detailedFood.strIngredient2}  {detailedFood.strMeasure2}</p>
                    <p>{detailedFood.strIngredient3}  {detailedFood.strMeasure3}</p>
                    <p>{detailedFood.strIngredient4}  {detailedFood.strMeasure4}</p>
                    <p>{detailedFood.strIngredient5}  {detailedFood.strMeasure5}</p>
                    <p>{detailedFood.strIngredient6}  {detailedFood.strMeasure6}</p>
                    <p>{detailedFood.strIngredient7}  {detailedFood.strMeasure7}</p>
                    <p>{detailedFood.strIngredient8}  {detailedFood.strMeasure8}</p>
                    <p>{detailedFood.strIngredient9}  {detailedFood.strMeasure9}</p>
                    <p>{detailedFood.strIngredient10}  {detailedFood.strMeasure10}</p>
                    <p>{detailedFood.strIngredient11}  {detailedFood.strMeasure11}</p>
                    <p>{detailedFood.strIngredient12}  {detailedFood.strMeasure12}</p>
                    <p>{detailedFood.strIngredient13}  {detailedFood.strMeasure13}</p>
                    <p>{detailedFood.strIngredient14}  {detailedFood.strMeasure14}</p>
                    <p>{detailedFood.strIngredient15}  {detailedFood.strMeasure15}</p>
                    <p>{detailedFood.strIngredient16}  {detailedFood.strMeasure16}</p>
                    <p>{detailedFood.strIngredient17}  {detailedFood.strMeasure17}</p>
                    <p>{detailedFood.strIngredient18}  {detailedFood.strMeasure18}</p>
                    <p>{detailedFood.strIngredient19}  {detailedFood.strMeasure19}</p>
                    <p>{detailedFood.strIngredient20}  {detailedFood.strMeasure20}</p></div>
                <img className='rounded' height='400px' src={detailedFood.strMealThumb} alt="" />
            </div>
            <p>Cooking Instructions : {detailedFood.strInstructions} </p>
        </div>
    )
}
