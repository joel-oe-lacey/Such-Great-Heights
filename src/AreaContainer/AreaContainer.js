import React from 'react';
import './AreaContainer.scss'
import Area from '../Area/Area'


const AreaContainer = (props) => {
  let areas = props.data.map(area => {
    return <Area
      shortName={area.shortName}
      name={area.name}
      description={area.description} />
  })

  return (
    <section>
      <div className='welcome-message'>
        <h1 className='welcome-h1'>Welcome!</h1>
        <h3 className='message-h3'>We hope you find the perfect room for your {props.tripType}. Please select an area to view listings.</h3>
      </div>
      <section className='area-card-container'>
        {areas}
      </section>
    </section>
  )
}

export default AreaContainer;
