import React from 'react';

const Rating = ({ value, numReviews, color }) => {
  // in order not to create separate component
  // with passing down the same props
  const Star = ({ index }) => {
    let className;
    if (value >= index) {
      className = 'fas fa-star';
    } else if (value >= index - 0.5) {
      className = 'fas fa-star-half-alt';
    } else {
      className = 'far fa-star';
    }
    return (
      <span>
        <i style={{ color }} className={className} />
      </span>
    );
  };
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star key={index} index={index} />
      ))}
      {numReviews && <span style={{ marginLeft: '0.6rem' }}>{`${numReviews} reviews`}</span>}
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
  value: 5,
};

export default Rating;
