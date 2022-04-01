import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ btnText, cardTitle, thumb, description, id, name, drinkOrFood }) {
    return (
        <div className="d-flex align-items-center justify-content-center ">

            <div className="card w-100 p-0 text-center bg-transparent border border-info text-white shadow-lg shadow-none rounded">
                <div className="card-header border-info p-3 m-0">
                    <p className='m-0'>{cardTitle}</p>
                </div>
                <div className="card-body">
                    <img className='rounded' width={'200px'} src={thumb} alt="" />
                    <ul className="list-unstyled mt-3 mb-4">
                        <p className='m-0'>{description ? description + '...' : name + " Is Amaizing"}</p>
                    </ul>
                    <Link to={`/${drinkOrFood}/${id}`} className="mx-auto btn btn-lg btn-block btn-outline-info">{btnText}</Link>
                </div>
            </div>

        </div>
    )
}
