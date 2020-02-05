import React from 'react';
import './Details.scss'

const Details = ({ id, name, details: {address, beds, baths, cost_per_night, features}, addFavorite }) => {
    const uniqueFeatures = features.map(feature => {
    return <li>{feature}</li>
    })
    //eventually add img as an img carousel 
    return (
        <section className='details'>
            <img src={`../../images/${id}_a.jpg`} alt={name} />
            <button onClick={() => addFavorite(id)}>Add Favorite</button>
            <ul className='details-info'>
                <li>{name}</li>
                <li>{address}</li>
                <li>{`Number of bedrooms: ${beds}`}</li>
                <li>{`Number of bathrooms: ${baths}`}</li>
                <li>{`Cost per night: $${cost_per_night}`}</li>
                <li> Unique Features
                    <ul>
                        {uniqueFeatures}
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Details;