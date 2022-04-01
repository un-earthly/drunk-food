import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import MyCardSkeleton from '../MySkeleton/MyCardSkeleton';

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
      .then(res => res.json())
      .then(data => {
        setFoods(data.meals)
        setLoading(false)
      })
  }, [])
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      .then(res => res.json())
      .then(data => {
        setDrinks(data.drinks)
        setLoading(false)
      })
  }, [])
  return (
    <div className='row row-cols-1 row-cols-lg-3 g-2'>
      {
        loading ?
          <>
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
            <MyCardSkeleton />
          </>
          :
          <>
            {
              foods.map((food) => {
                return <Card
                  key={food.idMeal}
                  thumb={food.strMealThumb}
                  cardTitle={food.strMeal.length > 30 ? food.strMeal.slice(0, 20) + '...' : food.strMeal}
                  btnText={'Show Details'}
                  name={food.strMeal}
                  id={food.idMeal}
                  drinkOrFood='food'
                />
              })
            }
            {
              drinks.map((drink) => {
                return <Card
                  key={drink.idDrink}
                  thumb={drink.strDrinkThumb}
                  btnText={'Show Details'}
                  cardTitle={drink.strDrink}
                  id={drink.idDrink}
                  drinkOrFood='drink'
                  name={drink.strDrink}
                />
              })
            }
          </>
      }

    </div>
  )
}
