import React from 'react';
import './AreaContainer.scss'
import Area from '../Area/Area'


const AreaContainer = (props) => {
  // console.log(props.data);
  let areas = props.data.map(area => {
    return <Area
      shortName={area.shortName}
      name={area.name}
      description={area.description} />
  })

  return (
    <section className='area-card-container'>
      {areas}
    </section>
  )
}

export default AreaContainer;
