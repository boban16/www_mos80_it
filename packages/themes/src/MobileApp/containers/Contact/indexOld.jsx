import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import { Formik, Form } from 'formik';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Button from '@pagerland/common/src/components/Button';
import Input from '@pagerland/common/src/components/Formik/Input';

import phoneImg from '../../assets/contact-phone.png';
import phoneImg2x from '../../assets/contact-phone@2x.png';

import data from '../../data';

const Contact = ({
  name,
  title,
  text,
  sendButtonText,
  form,
  WrapperProps,
  ContainerProps,
  InnerProps,
  ImgWrapperProps,
  FormProps,
  TitleProps,
  TextProps,
  ButtonProps,
}) => (
  <Box {...WrapperProps}>
    <Container name={name} {...ContainerProps}>
      <Box {...InnerProps}>
        <Box {...ImgWrapperProps}>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.666238011451!2d10.993637264582276!3d45.439163248493145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4be80535b9871de!2sMos80!5e0!3m2!1sit!2sit!4v1601299687541!5m2!1sit!2sit"
            width="600"
            height="480"
            style={{border:0}}
            allowFullScreen=""
            aria-hidden="false"
          />
        </Box>
        <Box {...FormProps}>
          <Formik
            onSubmit={form.onSubmit}
            initialValues={form.fields.reduce(
              (acc, field) => ({
                ...acc,
                [field.name]: field.initialValue,
              }),
              {},
            )}
          >
            <Form>
              <Fade cascade bottom duration={600}>
                <Typography {...TitleProps}>{title}</Typography>
                <Typography {...TextProps}>{text}</Typography>
                <div>
                  {form.fields.map(field => (
                    <Input key={field.name} {...field} />
                  ))}
                  <Button type="submit" {...ButtonProps} style={{boxShadow:"0 20px 40px #74b9ff59"}}>
                    {sendButtonText}
                  </Button>
                </div>
              </Fade>
            </Form>
          </Formik>
        </Box>
      </Box>
    </Container>
  </Box>
);

Contact.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  title: PropTypes.node,
  /**
   * Main content text
   */
  text: PropTypes.node,
  /**
   * Send button content
   */
  sendButtonText: PropTypes.node,
  /**
   * Form details
   */
  form: PropTypes.shape({
    /**
     * Formik validation schema
     * @see https://jaredpalmer.com/formik/docs/guides/validation
     */
    validationSchema: PropTypes.object,
    /**
     * Form submit function
     */
    onSubmit: PropTypes.func,
    /**
     * List of fields
     */
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Name of field
         */
        name: PropTypes.string.isRequired,
        /**
         * Type of field
         */
        type: PropTypes.string,
        /**
         * Placeholder for field
         */
        placeholder: PropTypes.string,
        /**
         * Initial value used in formik
         */
        initialValue: PropTypes.string,
      }),
    ),
  }),
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Inner box props
   * @See @pagerland/common/src/components/Box
   */
  InnerProps: PropTypes.object,
  /**
   * Props list for phone image wrapper
   * @See @pagerland/common/src/components/Box
   */
  ImgWrapperProps: PropTypes.object,
  /**
   * Phone image props
   * @See @pagerland/common/src/components/Img
   */
  ImgProps: PropTypes.object,
  /**
   * Object with props for Liquid component.
   */
  LiquidProps: PropTypes.object,
  /**
   * Form wrapper props
   * @See @pagerland/common/src/components/Box
   */
  FormProps: PropTypes.object,
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
   * Send button props
   * @See @pagerland/common/src/components/Button
   */
  ButtonProps: PropTypes.object,
};

Contact.defaultProps = {
  WrapperProps: {
    overflow: 'hidden',
    mt: -60,
    pt: 60,
  },
  InnerProps: {
    flexBox: true,
    pt: {
      _: 60,
      lg: 120,
    },
    pb: {
      _: 90,
      lg: 180,
    },
    ml: {
      _: 0,
      lg: 700,
    },
    position: 'relative',
  },
  FormProps: {
    flex: {
      _: '1',
      lg: '0 0 370px',
    },
  },
  ImgWrapperProps: {
    position: 'absolute',
    // top: -60,
    left: -680,
    zIndex: -1,
  },
  TitleProps: {
    as: 'h2',
    variant: 'h2',
    mb: {
      _: 3,
      lg: 4,
    },
  },
  TextProps: {
    color: 'gray.1',
    mb: {
      _: 3,
      lg: 4,
    },
  },
  ButtonProps: {
    variant: 'primary',
    mt: {
      _: 3,
      lg: 4,
    },
  },
  ImgProps: {
    src: phoneImg,
    srcSet: `${phoneImg} 1x, ${phoneImg2x} 2x`,
    alt: 'Contact us',
  },
  LiquidProps: {
    top: 140,
    zIndex: -2,
    left: -600,
    position: 'absolute',
  },
  ...data.contact,
};

export default Contact;
