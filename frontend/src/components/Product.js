import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Rating from './Rating';

const Product = ({ product }) => (
  <Card className="my-3 p-3 rounded">
    <Link to={`/product/${product.id}`}>
      <Card.Img src={product.image} variant="top" />
    </Link>
    <Card.Body>
      <Link to={`/product/${product.id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div">
        <Rating
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />
      </Card.Text>
      <Card.Text as="h3">
        $
        {product.price}
      </Card.Text>
    </Card.Body>
  </Card>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
