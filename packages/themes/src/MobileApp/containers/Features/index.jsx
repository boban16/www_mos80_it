import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from "@pagerland/common/src/components/Typography";
import Fade from "react-reveal/Fade";
import dynamic from 'next/dynamic';
import Feature from './Feature';
import data from '../../data';

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Calendario'),
  { ssr: false }
);

const Features = ({ name, WrapperProps, CaptionProps, TitleProps, TextProps }) => (
  <Box name={name} {...WrapperProps}>
    <Container>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600} delay={500}>
          <Typography {...TitleProps}>Fissa un appuntamento</Typography>
          <Typography {...TextProps}>Richiedi e fissa un appuntamento con i nostri tecnici certificati Apple.</Typography>
          <Typography {...TextProps}>
            <svg width="20" height="20" style={{verticalAlign:'middle', display:'inline-block'}}>
              <rect width="20" height="20" style={{fill:'rgb(245,161,69)'}} />
              Sorry, your browser does not support inline SVG.
            </svg>
            <span style={{verticalAlign:'middle', display:'inline-block', marginLeft:'10px'}}>Appuntamento in attesa di conferma</span>
            <svg width="20" height="20" style={{verticalAlign:'middle', display:'inline-block', marginLeft:'30px'}}>
              <rect width="20" height="20" style={{fill:'rgb(57,193,113)'}} />
              Sorry, your browser does not support inline SVG.
            </svg>
            <span style={{verticalAlign:'middle', display:'inline-block', marginLeft:'10px'}}>Appuntamento confermato</span>
          </Typography>
        </Fade>
      </Box>
      <DynamicComponentWithNoSSR />
    </Container>
  </Box>
);

Features.propTypes = {
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * List of features
   */
  features: PropTypes.arrayOf(PropTypes.object),
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Caption wrapper props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main content text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Mac component grid props
   */
};

Features.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: {
      _: 'left',
      md: 'center',
    },
    mb: {
      _: 4,
      lg: 5,
    },
  },
  TitleProps: {
    variant: 'h2',
    as: 'h2',
    mb: 3,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  ContainerProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  features: [
    {
      feature: data.features[0],
    },
    {
      feature: data.features[1],
      GridProps: {
        ...Feature.defaultProps.GridProps,
        gridTemplateAreas: {
          _: '"caption" "photo" "features"',
          lg: '"caption photo" "features photo"'
        },
        justifyContent: 'flex-end',
      },
      ImageProps: {
        position: 'relative',
        maxWidth: {
          _: '100%',
          lg: 'calc(100% + 80px)'
        },
        display: 'block',
      },
    },
    {
      useCards: true,
      feature: data.features[2],
      GridProps: {
        gridTemplateAreas: {
          _: '"caption" "features"',
          lg: '"caption features"',
        },
        gridColumnGap: '60px',
        gridTemplateColumns: {
          _: '1fr',
          lg: '340px auto',
        },
        alignItems: 'center',
      },
    },
  ],
};

export default Features;
