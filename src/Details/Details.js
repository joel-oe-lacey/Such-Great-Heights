import React from 'react';
import './Details.scss';
import Carousel from '../Carousel/Carousel'
// import { withRouter } from 'react-router';



const Details = ({ listings, match, addFavorite })=> {
    const listing = listings.find(listing => listing.id === parseInt(match.params.listing_id))
    //below is undefined handling, if no listing is available, use empty data from listings
    const { id, name, details: { address, beds, baths, cost_per_night, features }} = listing ? listing : listings[0];

    const uniqueFeatures = features.map(feature => {
        return <li>{feature}</li>
    })

    return (
        <div className='details-align'>
            <section className='details'>
                <Carousel id={id} name={name} imgTags={['a','b','c']} />
                <button className='details-fav' onClick={() => addFavorite(listing)}>Add Favorite</button>
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
        </div>
    )
}

export default Details;