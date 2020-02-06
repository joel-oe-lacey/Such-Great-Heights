import React from 'react';

const Arrow = ({direction, changeImg}) => {
    return <button className='arrow-btn' onClick={() => changeImg(direction)}>
        {direction === 'left' ? '←' : '→'}
        </button>
}

export default Arrow;