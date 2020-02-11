import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({direction, changeImg}) => {
    return <button className='arrow-btn' onClick={() => changeImg(direction)}>
        {direction === 'left' ? '←' : '→'}
        </button>
}

export default Arrow;

Arrow.propTypes = {
  direction: PropTypes.string,
  changeImg: PropTypes.func,
};
