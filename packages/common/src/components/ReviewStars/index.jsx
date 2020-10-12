import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { Wrapper } from './styled.components';

import Star from './Star';

const ReviewStars = ({ rate, ...props }) => (
  <Wrapper {...props}>
    {_.range(rate).map(star => (
      <Star active key={star} />
    ))}
    {_.range(5 - rate).map(star => (
      <Star key={star} />
    ))}
  </Wrapper>
);

ReviewStars.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default ReviewStars;
