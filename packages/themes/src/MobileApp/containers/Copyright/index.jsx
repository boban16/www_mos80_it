import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';

import data from '../../data';

const Copyright = ({
  copyright,
  WrapperProps,
  TextProps
}) => (
  <Box {...WrapperProps}>
    <Container>
      <Typography {...TextProps}>
        {copyright}
      </Typography>
    </Container>
  </Box>
);

Copyright.propTypes = {
  /**
   * Main content
   */
  copyright: PropTypes.node,
  /**
   * Main content text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
};

Copyright.defaultProps = {
  copyright: data.copyright,
  TextProps: {
    variant: 'body2',
    textAlign: 'center',
    color: 'gray.1'
  },
  WrapperProps: {
    py: 4,
    backgroundColor: 'gray.5',
  }
};

export default Copyright;
