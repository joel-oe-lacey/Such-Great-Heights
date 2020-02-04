export const fetchAreasData = areasData => {
  const promises = areasData.areas.map(area => {
    return fetch(`http://localhost:3001${area.details}`)
      .then(response => response.json())
      .then(info => {
        return {
          shortName: area.area || area.name,
          name: info.name,
          description: info.about,
        }
      })
  })
  return Promise.all(promises)
}
