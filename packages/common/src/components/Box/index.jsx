import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled.components';

/**
 * Box is the simplest element for building complete themes.
 */
const Box = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Box.propTypes = {
  /**
   * Content of the box
   */
  children: PropTypes.node.isRequired,
  /**
   * Use display flex
   */
  flexBox: PropTypes.bool,
};

Box.defaultProps = {
  flexBox: false,
};

export default Box;
