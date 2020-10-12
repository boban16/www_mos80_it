// React Basic and Bootstrap
import React, { useState } from 'react';
import { Container, Row, Col, Alert, Form, FormGroup, Button, Input, Label, Card, CardBody } from 'reactstrap';
// Import Icons

import Box from '@pagerland/common/src/components/Box';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Typography from '@pagerland/common/src/components/Typography';
import phoneImg from '../../assets/contact-phone.png';
import phoneImg2x from '../../assets/contact-phone@2x.png';
import data from '../../data';

function Contact({ CaptionProps, TitleProps, TextProps, WrapperProps, ContainerProps, InnerProps, ImgWrapperProps, FormProps }) {

  const [contactVisible, setContactVisible] = useState(false);
  const [contactVisibleError, setContactVisibleError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    document.getElementById('name3').value = '';
    document.getElementById('email3').value = '';
    document.getElementById('number').value = '';
    document.getElementById('message').value = '';
  };

  const submitRequest = async e => {
    e.preventDefault();
    const response = await fetch('https://9f68krods1.execute-api.eu-central-1.amazonaws.com/dev/api/homepage/contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.status === 200){
      setContactVisible(true);
      resetForm();
    }else{
      setContactVisibleError(true);
      resetForm();
    }
  };


  return (
    <Box {...WrapperProps}>
      <Container name={name} {...ContainerProps}>
        <Box {...CaptionProps}>
          <Fade bottom cascade duration={600} delay={500}>
            <Typography {...TitleProps}>Contattaci</Typography>
            <Typography {...TextProps}>Hai una richiesta o bisogno di aiuto? Contattaci ora.</Typography>
          </Fade>
        </Box>
        <Box {...InnerProps}>
          <Box {...ImgWrapperProps}>
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.666238011451!2d10.993637264582276!3d45.439163248493145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4be80535b9871de!2sMos80!5e0!3m2!1sit!2sit!4v1601299687541!5m2!1sit!2sit"
              width="600"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
            />
          </Box>
          <Box {...FormProps}>
            <Col className="">
              <Card className="rounded shadow border-0">
                <CardBody>
                  <Alert color="primary" isOpen={contactVisible} toggle={()=> setContactVisible(!contactVisible)}>
                    Il messaggio è stato inviato correttamente.
                  </Alert>
                  <Alert color="danger" isOpen={contactVisibleError} toggle={()=> contactVisibleError(!contactVisibleError)}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Si è verificato un errore durente l'invio, la invitiamo a riprovare.
                  </Alert>
                  <Form onSubmit={submitRequest}>
                    <Row className="">
                      <Col lg="12">
                        <FormGroup className="mb-3 position-relative">
                          <Label>Cognome e nome <span className="text-danger">*</span></Label>
                          <Input name="name" id="name3" type="text" className="form-control pl-5" placeholder="Cognome e nome"
                                 onChange={e => setName({ name: e.target.value})} required />
                        </FormGroup>
                      </Col>

                      <Col lg="12">
                        <FormGroup className="mb-3 position-relative">
                          <Label>Indirizzo Email <span className="text-danger">*</span></Label>
                          <Input type="email" id="email3" className="form-control pl-5" placeholder="Email" name="email"
                                 onChange={e => setEmail({ email: e.target.value})} required />
                        </FormGroup>
                      </Col>

                      <Col md="12">
                        <FormGroup className="position-relative">
                          <Label>Numero di telefono <span className="text-danger">*</span></Label>
                          <Input name="number" id="number" type="number" className="form-control pl-5" placeholder="N. di telefono"
                                 onChange={e => setPhone({ phone: e.target.value})} required />
                        </FormGroup>
                      </Col>

                      <Col md="12">
                        <FormGroup className="position-relative">
                          <Label>Messaggio <span className="text-danger">*</span></Label>
                          <textarea name="message" id="message" type="text" className="form-control pl-5" placeholder="Inserisci il tuo messaggio" rows={4}
                                    onChange={e => setMessage({ message: e.target.value})} required />
                        </FormGroup>
                      </Col>

                      <Col lg="12" className="mb-0">
                        <Button color="primary" block>Contattaci</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Box>
        </Box>
      </Container>
    </Box>

  );
}

Contact.propTypes = {
  /**
   * Caption wrapper props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
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
  WrapperProps: {
    overflow: 'hidden',
    mt: -60,
    pt: 60,
  },
  InnerProps: {
    flexBox: true,
    pt: {
      _: 60,
      lg: 0,
    },
    pb: {
      _: 90,
      lg: 120,
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
