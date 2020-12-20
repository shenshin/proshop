import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  const showStar = (i) => {
    let className;
    if (value >= i) {
      className = 'fas fa-star';
    } else if (value >= i - 0.5) {
      className = 'fas fa-star-half-alt';
    } else {
      className = 'far fa-star';
    }
    return (
      <span key={i}>
        <i style={{ color }} className={className} />
      </span>
    );
  };
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        showStar(i + 1)
      ))}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
  value: 5,
};

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
