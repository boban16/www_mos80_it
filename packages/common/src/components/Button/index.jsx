import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled.components';

/**
 * Buttons allow users to take actions, and make choices, with a single tap. They are also prepared to working as a custom urls or route links.
 */
const Button = ({ children, ...props }) => (
  <Wrapper {...props}>
    <span>{children}</span>
  </Wrapper>
);

Button.propTypes = {
  /**
   * Content of the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Component which will be used instead of default
   */
  as: PropTypes.elementType,
};

Button.defaultProps = {
  as: 'button',
};

export default Button;
