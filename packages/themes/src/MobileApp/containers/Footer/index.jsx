import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Icon from '@pagerland/common/src/components/Icon';
import Grid from '@pagerland/common/src/components/Grid';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import data from '../../data';
import LanderPagerLogo from '../../components/Logo';

const Footer = ({
    WrapperProps,
    GridProps,
    HeadingsProps,
    TypographyProps,
    IconProps,
    contact,
    section3,
  }) => (
    <Box {...WrapperProps}>
      <Container>
        <Grid {...GridProps}>
          <Box>
            <Fade bottom cascade duration={600}>
              <div>
                <Typography {...HeadingsProps}>Orari di apertura</Typography>
                <Box flexBox mb={3}>
                  <Typography {...TypographyProps}>Lun: 14.00 - 19.00</Typography>
                </Box>
                <Box flexBox mb={3}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Typography {...TypographyProps}>Mar -> Ven: 9.00 - 13.00 | 14.00 - 19.00</Typography>
                </Box>
                <Box flexBox mb={3}>
                  <Typography {...TypographyProps}>Sab: 9.00 - 13.00</Typography>
                </Box>
              </div>
            </Fade>
          </Box>
          <Box>
            <Fade bottom cascade duration={600}>
              <div>
                <Typography {...HeadingsProps}>{contact.title}</Typography>
                {contact.sections?.map((section, key) => (
                  <Box flexBox mb={3} key={key}>
                    <Icon icon={section.icon} {...IconProps} />
                    <Typography {...TypographyProps}>{section.text}</Typography>
                  </Box>
                ))}
              </div>
            </Fade>
          </Box>
          <Box>
            <Fade bottom cascade duration={600}>
              <div>
                <Typography {...HeadingsProps}>{section3.title}</Typography>
                <Box flexBox mb={3}>
                  <Typography {...TypographyProps} width={270}>
                    <a href="https://www.gruppomos80.it">Gruppo mos80</a>
                  </Typography>
                </Box>
                <Box flexBox mb={3}>
                  <Typography {...TypographyProps} width={270}>
                    <a href="https://support.apple.com/it-it">Supporto Apple</a>
                  </Typography>
                </Box>
                <Box flexBox mb={3}>
                  <Typography {...TypographyProps} width={270}>
                    <a href="https://support.apple.com/it-it/HT201441">Disattivare Blocco di attivazione</a>
                  </Typography>
                </Box>
              </div>
            </Fade>
          </Box>
        </Grid>
      </Container>
    </Box>
  );

Footer.propTypes = {
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Footer grid props
   * @See @pagerland/common/src/components/Grid
   */
  GridProps: PropTypes.object,
  /**
   * Heading text props
   * @See @pagerland/common/src/components/Typography
   */
  HeadingsProps: PropTypes.object,
  /**
   * Props of typography used for texts in whole footer
   * @See @pagerland/common/src/components/Typography
   */
  TypographyProps: PropTypes.object,
  /**
   * Logo element additional props
   */
  LogoProps: PropTypes.object,
  /**
   * Social link element props
   */
  SocialLinkProps: PropTypes.object,
  /**
   * Footer icons props
   */
  IconProps: PropTypes.object,
  /**
   * Logo element
   */
  Logo: PropTypes.elementType,
  /**
   * First section of the footer details
   */
  section1: PropTypes.shape({
    Aasp: PropTypes.string,
    text: PropTypes.string,
  }),
  /**
   * Contact sections details
   */
  contact: PropTypes.shape({
    title: PropTypes.node,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType,
        text: PropTypes.node,
      }),
    ),
  }),
  /**
   * Last section of the footer details
   */
  section3: PropTypes.shape({
    title: PropTypes.node,
    text: PropTypes.string,
  }),
  /**
   * Social links showed in first section
   */
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

Footer.defaultProps = {
  WrapperProps: {
    py: {
      _: 4,
      sm: 5,
    },
    backgroundColor: 'gray.6',
  },
  GridProps: {
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
    gridGap: 32,
  },
  HeadingsProps: {
    variant: 'h4',
    as: 'h4',
    color: 'black',
    mb: {
      _: 3,
      md: 42,
    },
  },
  TypographyProps: {
    color: 'gray.1',
  },
  LogoProps: {
    mb: 30,
  },
  SocialLinkProps: {
    color: 'primary',
    borderWidth: 1,
    borderColor: 'primary',
    borderStyle: 'solid',
    p: 0,
    mr: 2,
    width: 50,
    height: 50,
    lineHeight: '50px',
    textAlign: 'center',
    fontSize: 24,
  },
  IconProps: {
    color: 'primary',
    fontSize: 24,
    mr: 3,
  },
  Logo: LanderPagerLogo,
  ...data.footer,
  socialLinks: data.socialLinks,
};

export default Footer;
