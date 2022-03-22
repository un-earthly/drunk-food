import React from 'react'

export default function Card({ btnText, cardTitle, thumb, description }) {
    return (
        <div className="card p-0 text-center bg-transparent border border-info text-white shadow-lg shadow-none rounded">
            <div className="card-header border-info p-3 m-0">
                <p className='m-0'>{cardTitle}</p>
            </div>
            <div className="card-body">
                <img className='rounded' width={'200px'} src={thumb} alt="" />
                <ul className="list-unstyled mt-3 mb-4">
                    <p className='m-0'>{description ? description + '...' : cardTitle + " Is Amaizing"}</p>
                </ul>
                <button type="button" id='details' className="mx-auto btn btn-lg btn-block btn-outline-info">{btnText}</button>
            </div>
        </div>
    )
}
