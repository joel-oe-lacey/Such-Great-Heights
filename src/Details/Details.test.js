import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details/Details';

describe('Details', () => {
    it('should equal snapshot ', () => {
        const listings = [{"id":3,"area_id":590,"name":"Hip RiNo Party Spot","details":{"address":"2250 Lawrence St, 80205","neighborhood_id":5124122,"superhost":true,"seller_source":"91jss1","beds":3,"baths":2.5,"cost_per_night":420,"features":["hot tub","espresso machine"]}}, 
        { "id": 2, "area_id": 751, "name": "The Other House", "details": { "address": "1800 Safe Way, 80202", "neighborhood_id": 5124122, "superhost": true, "seller_source": "91jss1", "beds": 3, "baths": 2.5, "cost_per_night": 420, "features": ["hot tub", "espresso machine"] } 
        }]; 
        const matchMock = {params: {listing_id: 2}}
        const wrapper = shallow(<Details listings={listings} match={matchMock} />);
        expect(wrapper).toMatchSnapshot();
        //how to test that it will display a different listing if listing match is different?
    });

})