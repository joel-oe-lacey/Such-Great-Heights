import React from 'react';

const Arrow = ({direction, changeImg}) => {
    return <button className='arrow-btn' onClick={() => changeImg(direction)}>
            {direction === 'left' ? '&#x2B05;' : '&#x27A1;'}
        </button>
}

export default Arrow;