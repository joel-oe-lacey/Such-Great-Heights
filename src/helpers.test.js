import { fetchAreasData, fetchListings, fetchData } from './helpers.js';

describe('API calls', () => {
  let mockResponse = [];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
      return Promise.resolve(mockResponse)
      }
    })
  })
})

  it('should have the correct url', () => {
    fetchData();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas')
  })
  it('should return an array of areasData', () => {
    expect(fetchData()).resolves.toEqual(mockResponse)
  })

})
