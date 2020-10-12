import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import { smoothLinkProps } from '@pagerland/common/src/utils';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';

import Typography from '@pagerland/common/src/components/Typography';
import ParallaxBackground from '../../components/ParallaxBackground';
import aasp from '../../assets/aaspWhite.svg';

import data from '../../data';

const Welcome = ({
  name,
  background,
  title,
  WrapperProps,
  InnerProps,
  ContainerProps,
  CaptionProps,
  TitleProps,
}) => (
  <Box name={name} {...WrapperProps}>
    <ParallaxBackground {...background} />
    <Box {...InnerProps}>
      <Container {...ContainerProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600}>
            <Typography {...TitleProps}>{title}</Typography>
            <Box flexBox mt={4}>
              <Fade left duration={600} delay={100} distance="30px">
                <img src={aasp} alt="Apple service provider" style={{maxHeight: '60px', marginBottom: '120px',}} />
              </Fade>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  </Box>
);

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  WrapperProps: PropTypes.object,
  InnerProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  CaptionProps: PropTypes.object,
  TitleProps: PropTypes.object,
  PriceProps: PropTypes.object,
  GridProps: PropTypes.object,
  CtaProps: PropTypes.object,
  FeatureProps: PropTypes.object,
  FeatureIconProps: PropTypes.object,
  FeatureTitleProps: PropTypes.object,
  title: PropTypes.node,
  price: PropTypes.node,
  background: PropTypes.object,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      IconProps: PropTypes.object,
      title: PropTypes.node,
    }),
  ),
  cta: PropTypes.object,
};

Welcome.defaultProps = {
  WrapperProps: {
    pt: {
      _: '0',
      lg: '50%',
    },
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
  },
  InnerProps: {
    pt: {
      _: 120,
      lg: 0,
    },
    pb: {
      _: 80,
      lg: 0,
    },
    position: {
      _: 'relative',
      lg: 'absolute',
    },
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    bg: 'rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  CaptionProps: {
    paddingLeft: 25,
    paddingRight: 25,
    maxWidth: 544,
  },
  TitleProps: {
    as: 'h1',
    variant: 'h1',
    color: 'gray.6',
  },
  PriceProps: {
    variant: 'h1',
    color: 'brand',
  },
  CtaProps: {
    as: Link,
    ...smoothLinkProps,
    mt: 4,
    variant: 'brand',
    size: 'large',
  },
  GridProps: {
    mt: 4,
    maxWidth: 320,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '32px',
    gridRowGap: '8px',
  },
  FeatureProps: {
    flexBox: true,
    alignItems: 'left',
  },
  FeatureIconProps: {
    fontSize: 24,
    color: 'gray.6',
    mr: 2,
  },
  FeatureTitleProps: {
    variant: 'h4',
    color: 'gray.6',
  },
  ...data.welcome,
};

export default Welcome;
