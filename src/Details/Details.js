import React from 'react';
import './Details.scss';
import Carousel from '../Carousel/Carousel'
// import { withRouter } from 'react-router';



const Details = ({ listings, match, addFavorite, removeFavorite })=> {
    const listing = listings.find(listing => listing.id === parseInt(match.params.listing_id))
    const { id, name, details: { address, beds, baths, cost_per_night, features }} = listing;

    const uniqueFeatures = features.map(feature => {
        return <li>{feature}</li>
    })

    return (
        <div className='details-container'>
            <section className='details-card'>
                <Carousel className='carousel' id={id} name={name} imgTags={['a','b','c']} />
                <button className='details-fav' onClick={() => addFavorite(listing)}>Add Favorite</button>
                <button className='details-unfav' onClick={() => removeFavorite(listing)}>Remove Favorite</button>
                <ul className='details-info'>
                    <li className='details-list'>{name}</li>
                    <li className='details-list'>{address}</li>
                    <li className='details-list'>{`Number of bedrooms: ${beds}`}</li>
                    <li className='details-list'>{`Number of bathrooms: ${baths}`}</li>
                    <li className='details-list'>{`Cost per night: $${cost_per_night}`}</li>
                    <li className='details-list'> Unique Features
                        <ul className='unique-features'>
                            {uniqueFeatures}
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Details;
