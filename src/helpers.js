export const fetchData = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json())
    .then(areasData => fetchAreasData(areasData))
}

export function fetchAreasData(areasData) {
  const promises = areasData.areas.map(area => {
    return fetch(`http://localhost:3001${area.details}`)
      .then(response => response.json())
      .then(info => {
        return {
          id: info.id,
          shortName: info.area,
          name: info.name,
          description: info.about,
          listings: info.listings,
        }
      })

  })
  return Promise.all(promises);
}

export const fetchListings = (stateAreas) => {
  const listingProms = stateAreas.reduce((areaListings, area) => {
    area.listings.forEach(listing => {
      areaListings.push(fetch(`http://localhost:3001${listing}`)
        .then(res => res.json())
        .then(info => {
          return {
            id: info.listing_id,
            area_id: info.area_id,
            name: info.name,
            details: {
              address: `${info.address.street}, ${info.address.zip}`,
              ...info.details
            }
          }
        })
      )
    })
    return areaListings
  }, []);

  return Promise.all(listingProms)
}
