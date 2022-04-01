import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import MyCardSkeleton from '../MySkeleton/MyCardSkeleton';

export default function Food() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
      .then(res => res.json())
      .then(data => {
        setFoods(data.meals)
        setLoading(false)
      })
  }, [])


  console.log(foods)
  return (
    <div className='row row-cols-1 row-cols-lg-3 g-2'>
      {
        loading

          ?
          <>
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
          </>
          :
          foods.map((food) => {
            return <Card
              key={food.idMeal}
              thumb={food.strMealThumb}
              cardTitle={food.strMeal}
              name={food.strMeal}
              btnText={'Show Details'}
              strCategory={food.strCategory}
              id={food.idMeal}
              drinkOrFood='food'
            />
          })



      }
    </div>
  )
}
