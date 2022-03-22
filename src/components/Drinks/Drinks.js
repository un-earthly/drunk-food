import React, { useEffect, useState } from 'react'
import Card from '../card/Card';
import MyCardSkeleton from '../MySkeleton/MyCardSkeleton';

export default function Drink() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(res => res.json())
            .then(data => {
                setDrinks(data.drinks)
                setLoading(false)
            })
    }, [])
    return (

        <div className='row row-cols-1 row-cols-lg-3 my-5 mx-auto'>
            {
                loading ?
                    <>
                        <MyCardSkeleton />
                        <MyCardSkeleton />
                        <MyCardSkeleton />
                        <MyCardSkeleton />
                        <MyCardSkeleton />
                    </> :
                    drinks.map((drink) => {
                        return <Card
                            key={drink.idCategory}
                            thumb={drink.strDrinkThumb}
                            btnText={'Show Details'}
                            cardTitle={drink.strDrink}
                        />
                    })
            }
        </div>
    )
}
