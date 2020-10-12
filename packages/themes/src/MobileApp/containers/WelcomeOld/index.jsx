import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Box from '@pagerland/common/src/components/Box';

import { PhoneImg, Images } from './styled.components';

import phoneImg from '../../assets/background.jpg';
import phoneImg2x from '../../assets/Phones@2x.png';
import Liquid from '../../components/Liquids/A';
import aasp from '../../assets/aasp.svg';

import data from '../../data';

const Welcome = ({
  WrapperProps,
  ContainerProps,
  ImagesWrapperProps,
  ImagesProps,
  CaptionProps,
  TitleProps,
  TextProps,
  PhoneImgProps,
  LiquidProps,
  title,
  text,
  name,
  LiquidComponent,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps} name={name}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <Box flexBox mt={4}>
            <Fade left duration={600} delay={100} distance="30px">
              <img src={aasp} alt="Apple service provider" />
            </Fade>
          </Box>
        </a>
      </Box>

      <Box {...ImagesWrapperProps}>
        <Images {...ImagesProps}>
          <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
            <PhoneImg {...PhoneImgProps} />
          </Reveal>
        </Images>
      </Box>
    </Container>
  </Box>
);

Welcome.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Component container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Wrapper for header image and liquid in background
   * @See @pagerland/common/src/components/Box
   */
  ImagesWrapperProps: PropTypes.object,
  /**
   * Images container which can be used for determine percentage size of images
   * @See @pagerland/common/src/components/Box
   */
  ImagesProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Props of image with phones (main image)
   * @See @pagerland/common/src/components/Img
   */
  PhoneImgProps: PropTypes.object,
  /**
   * Props with liquid in background
   */
  LiquidProps: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * Liquid component in background
   */
  LiquidComponent: PropTypes.elementType,
};

Welcome.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    marginBottom: {
      _: -110,
      lg: -140,
      md: -140,
    },
  },
  ContainerProps: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      _: 'column',
      lg: 'row',
      md: 'row',
    },
    marginBottom: {
      _: 140,
      lg: 200,
      md: 200,
    },
  },
  ImagesWrapperProps: {
    alignSelf: 'stretch',
    position: 'relative',
    width: '100%',
    zIndex: -1,
  },
  ImagesProps: {
    paddingTop: '85%',
  },
  CaptionProps: {
    flexBox: false,
    flexDirection: 'row',
    justifyContent: 'center',
    pt: 3,
    pb: {
      _: 3,
      lg: 5,
    },
    flex: {
      _: '0 0 1',
      lg: `0 0 470px`,
    },
    height: '100%',
  },
  TitleProps: {
    as: 'h2',
    variant: 'h1',
    mb: 4,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  PhoneImgProps: {
    src: phoneImg,
    srcSet: `${phoneImg} 1x, ${phoneImg2x} 2x`,
    alt: data.title,
    top: `0%`,
    left: `-135%`,
    width: `300%`,
  },
  LiquidProps: {
    position: 'absolute',
    top: '12px',
    left: '-100px',
    zIndex: 1,
    width: '119.7604790419%'
  },
  ...data.welcome,
};

export default Welcome;
