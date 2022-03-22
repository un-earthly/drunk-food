import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import MyCardSkeleton from '../MySkeleton/MyCardSkeleton';

export default function Food() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data =>{ 
        setFoods(data.categories)
        setLoading(false)
      })
  }, [])
  return (

    <div className='row row-cols-1 row-cols-lg-3 my-5 mx-auto'>
      {
        loading?
        <>
          <MyCardSkeleton />
          <MyCardSkeleton />
          <MyCardSkeleton />
          <MyCardSkeleton />
          <MyCardSkeleton />
        </>:
        foods.map((food) => {
          return <Card
            key={food.idCategory}
            thumb={food.strCategoryThumb}
            cardTitle={food.strCategory}
            description={food.strCategoryDescription.slice(0, 50)}
            btnText={'Show Details'}
            strCategory={food.strCategory}
          />
        })

      }
    </div>
  )
}
