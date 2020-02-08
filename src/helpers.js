export function fetchAreasData(areasData) {
  const promises = areasData.areas.map(area => {
    return fetch(`http://localhost:3001${area.details}`)
      .then(response => response.json())
      .then(info => {
        return {
          shortName: area.area,
          name: info.name,
          description: info.about,
          // listings: fetchListingData(info.listings),
          listings: info.listings,
        }
      })

  })
  // console.log(promises);
  return Promise.all(promises);
}


export const fetchListingData = listingData => {
  const promises = listingData.map(listing => {
    return fetch(`http://localhost:3001${listing}`)
      .then(response => response.json())
      .then(listingInfo => {
        return {
          id: listingInfo.listing_id,
          name: listingInfo.name,
          details: {
            address: `${listingInfo.address.street}, ${listingInfo.address.zip}`,
            ...listingInfo.details
          }
        }
      })
  })
  return Promise.all(promises)
}
