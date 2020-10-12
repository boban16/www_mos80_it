import React from 'react';
import PropTypes from 'prop-types';

import Box from '@pagerland/common/src/components/Box';
import Container from 'react-bootstrap/Container';
import RepairStatus from './RepairStatus';
import data from '../../data';

const Repair = ({
  name,
  WrapperProps,
}) => {
  return (
    <Box name={name} {...WrapperProps}>
      <Container>
        <RepairStatus name='repairStatus' />
      </Container>
    </Box>
  )
};

Repair.propTypes = {
  name: PropTypes.string.isRequired,
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
};

Repair.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
};

export default Repair;
