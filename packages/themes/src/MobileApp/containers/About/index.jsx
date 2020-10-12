import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import Box from '@pagerland/common/src/components/Box';
import Grid from '@pagerland/common/src/components/Grid';
import Typography from '@pagerland/common/src/components/Typography';
import Card from '@pagerland/common/src/components/Card';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { FaArrowLeft } from "react-icons/fa";

import mac from '../../assets/icons/mac.png';
import iphone from '../../assets/icons/iphone.png';
import airpods from '../../assets/icons/airpods.png';
import applewatch from '../../assets/icons/applewatch.png';
import data from '../../data';
import './About.css'

function imageDevice(device) {
  switch (device) {
    case 'mac':
      return <img src={mac} alt="Mac" />;
    case 'iphone':
      return <img src={iphone} alt="iPhone/iPad" />;
    case 'airpods':
      return <img src={airpods} alt="Airpods" />;
    case 'applewatch':
      return <img src={applewatch} alt="Apple Watch" />;
    default:
      return null;
  }
}

const About = ({
  name,
  title,
  text,
  features,
  iosFeatures,
  macFeatures,
  iphoneFeatures,
  WrapperProps,
  CaptionProps,
  TitleProps,
  TextProps,
  FeaturesGridProps,
  CardProps,
  MacGridProps,
  IphoneGridProps,
  IosGridProps,
  ListinoGridProps,
}) => {
  const [supportDevice, setSupportDevice] = useState( '');
  const [listinoPrezzi, setListinoPrezzi] = useState('');
  const [show, setShow] = useState(true);
  const [deviceSelected, setDeviceSelected] = useState([{deviceId:''},{deviceSelected:''},{display: 'none'},{repairBattery:''},{repairDisplay:''},{repairDevice:''}]);
  /**
   * bind the DataManager instance to dataSource property
   */
  const iphoneData = new DataManager({
    url: `https://9f68krods1.execute-api.eu-central-1.amazonaws.com/dev/api/listino/${listinoPrezzi}`,
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  /**
   * maps the remote data column to fields property
   * @type {{text: string, value: string}}
   */
  const iphoneFields = { text: 'model', value: 'id' };

  function onChange(event) {
    setDeviceSelected([
      {deviceId: event.itemData.id},
      {deviceSelected: event.itemData.model},
      {display: ''},
      {repairBattery: event.itemData.repairBattery},
      {repairDisplay: event.itemData.repairDisplay},
      {repairDevice: event.itemData.repairDevice},
      ])
  }

  /**
   * @return {null}
   */
  function SupportDevice(device) {
    setSupportDevice(device);
    setShow(false);
    return null;
  }

  /**
   *
   */
  function goBack(e){
    e.preventDefault();
    console.log(e);
    setDeviceSelected([{deviceId:''},{deviceSelected:''},{display: 'none'},{repairBattery:''},{repairDisplay:''},{repairDevice:''}]);
    setSupportDevice('');
    setShow(true);
  }
  /**
   *
   */
  function ListinoPrezzi(device) {
    setSupportDevice('listinoPrezzi');
    setListinoPrezzi(device);
  }

  if(show) {
    // eslint-disable-next-line no-inner-declarations
    return (
      <Box name={name} {...WrapperProps}>
        <Container>
          <Box {...CaptionProps}>
            <Fade bottom cascade duration={600}>
              <Typography {...TitleProps}>{title}</Typography>
              <Typography {...TextProps}>{text}</Typography>
            </Fade>
          </Box>
          <div id='menuSupport'>
            <Grid {...FeaturesGridProps}>
              {features?.map((feature, key) => (
                <Fade bottom duration={600} key={feature.id} delay={key * 100}>
                  {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid,react/button-has-type */}
                  <button className="cardbotton" onClick={() => SupportDevice(feature.id)}>
                    <Card {...CardProps}>
                      {imageDevice(feature.id)}
                      <Typography {...CardProps.TitleProps}>{feature.title}</Typography>
                    </Card>
                  </button>
                </Fade>
              ))}
            </Grid>
          </div>
        </Container>
      </Box>
    );
  }
  // eslint-disable-next-line default-case
  switch (supportDevice) {
    case 'mac': {
      return (
        <Box name={name} {...WrapperProps}>
          <Container>
            <Box {...CaptionProps}>
              <Fade bottom cascade duration={600}>
                <Typography {...TitleProps}>
                  <Link to="about"><FaArrowLeft size={20} onClick={goBack} /></Link>
                  {' '}
                  Supporto Mac
                </Typography>
                <Typography {...TextProps}>Per assistenza o verificare lo stato di una riparazione</Typography>
              </Fade>
            </Box>
            <div id='menuSupport'>
              <Grid {...MacGridProps}>
                {macFeatures?.map((macFeature, key) => (
                  <Fade bottom duration={600} key={macFeature.id} delay={key * 100}>
                    <Card {...CardProps}>
                      <Typography {...TitleProps}>{macFeature.title}</Typography>
                      <Typography {...TextProps}>{macFeature.text}</Typography>
                      {/* eslint-disable-next-line no-undef */}
                      <Button href={macFeature.linkButton} style={{marginTop: '20px'}}>{macFeature.button}</Button>
                    </Card>
                  </Fade>
                ))}
              </Grid>
            </div>
          </Container>
        </Box>
      );
    }
    case 'iphone': {
      return (
        <Box name={name} {...WrapperProps}>
          <Container>
            <Box {...CaptionProps}>
              <Fade bottom cascade duration={600}>
                <Typography {...TitleProps}>
                  <Link to="about"><FaArrowLeft size={20} onClick={goBack} /></Link>
                  {' '}
                  Supporto iPhone/iPad
                </Typography>
                <Typography {...TextProps}>Per assistenza o verificare lo stato di una riparazione</Typography>
              </Fade>
            </Box>
            <Grid {...IphoneGridProps}>
              {iphoneFeatures?.map((iphoneFeature, key) => (
                <Fade bottom duration={600} key={iphoneFeature.id} delay={key * 100}>
                  <Card {...CardProps}>
                    <Typography {...TitleProps}>{iphoneFeature.title}</Typography>
                    <Typography {...TextProps}>{iphoneFeature.text}</Typography>
                    {(iphoneFeature.id === 'iphone_1' ||iphoneFeature.id === 'iphone_2' ? <Link to="about"><Button href={iphoneFeature.linkButton} style={{marginTop: '20px'}}>{iphoneFeature.button}</Button></Link> : <Link to="about"><Button style={{marginTop: '20px'}} onClick={()=>ListinoPrezzi(iphoneFeature.device)}>{iphoneFeature.button}</Button></Link>)}
                  </Card>
                </Fade>
              ))}
            </Grid>
          </Container>
        </Box>
      )
    }
    case 'airpods': {
      return (
        <Box name={name} {...WrapperProps}>
          <Container>
            <Box {...CaptionProps}>
              <Fade bottom cascade duration={600}>
                <Typography {...TitleProps}>
                  <Link to="about"><FaArrowLeft size={20} onClick={goBack} /></Link>
                  {' '}
                  Supporto Airpods
                </Typography>
                <Typography {...TextProps}>Per assistenza o verificare lo stato di una riparazione</Typography>
              </Fade>
            </Box>
            <Grid {...IosGridProps}>
              {iosFeatures?.map((iosFeature, key) => (
                <Fade bottom duration={600} key={iosFeature.id} delay={key * 100}>
                  <Card {...CardProps}>
                    {(iosFeature.id === 'ios_3') ? <Typography {...TitleProps}>{iosFeature.airpods}</Typography> : <Typography {...TitleProps}>{iosFeature.title}</Typography>}
                    <Typography {...TextProps}>{iosFeature.text}</Typography>
                    {(iosFeature.id === 'ios_1' ||iosFeature.id === 'ios_2' ? <Link to="about"><Button href={iosFeature.linkButton} style={{marginTop: '20px'}}>{iosFeature.button}</Button></Link> : <Link to="about"><Button style={{marginTop: '20px'}} onClick={()=>ListinoPrezzi('airpods')}>{iosFeature.button}</Button></Link>)}
                  </Card>
                </Fade>
              ))}
            </Grid>
          </Container>
        </Box>
      )
    }
    case 'applewatch': {
      return (
        <Box name={name} {...WrapperProps}>
          <Container>
            <Box {...CaptionProps}>
              <Fade bottom cascade duration={600}>
                <Typography {...TitleProps}>
                  <Link to="about"><FaArrowLeft size={20} onClick={goBack} /></Link>
                  {' '}
                  Supporto Apple Watch
                </Typography>
                <Typography {...TextProps}>Per assistenza o verificare lo stato di una riparazione</Typography>
              </Fade>
            </Box>
            <Grid {...IosGridProps}>
              {iosFeatures?.map((iosFeature, key) => (
                <Fade bottom duration={600} key={iosFeature.id} delay={key * 100}>
                  <Card {...CardProps}>
                    {(iosFeature.id === 'ios_3') ? <Typography {...TitleProps}>{iosFeature.appleWatch}</Typography> : <Typography {...TitleProps}>{iosFeature.title}</Typography>}
                    <Typography {...TextProps}>{iosFeature.text}</Typography>
                    {(iosFeature.id === 'ios_1' ||iosFeature.id === 'ios_2' ? <Link to="about"><Button href={iosFeature.linkButton} style={{marginTop: '20px'}}>{iosFeature.button}</Button></Link> : <Link to="about"><Button style={{marginTop: '20px'}} onClick={()=>ListinoPrezzi('applewatch')}>{iosFeature.button}</Button></Link>)}
                  </Card>
                </Fade>
              ))}
            </Grid>
          </Container>
        </Box>
      )
    }
    case 'listinoPrezzi' : {
      return (
        <Box name={name} {...WrapperProps}>
          <Container>
            <Box {...CaptionProps}>
              <Fade bottom cascade duration={600}>
                <Typography {...TitleProps}>
                  <Link to="about"><FaArrowLeft size={20} onClick={goBack} /></Link>
                  {' '}
                  Listino prezzi
                </Typography>
                <Typography {...TextProps}>Verifica i costi di riparazione</Typography>
              </Fade>
            </Box>
            <div id='menuSupport'>
              <Grid {...ListinoGridProps}>
                <Fade bottom duration={600} delay={100}>
                  <Card {...CardProps}>
                    <Row>
                      <Col md={12}>
                        <Typography {...CardProps.TitleProps}>Seleziona il tuo dispositivo</Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={{ span: 4, offset: 4 }}>
                        <DropDownListComponent
                          id="customers"
                          dataSource={iphoneData}
                          sortOrder="Ascending"
                          fields={iphoneFields}
                          placeholder="Seleziona un modello"
                          popupHeight="220px"
                          change={onChange}
                        />
                      </Col>
                    </Row>
                    <div className='divPrezzi' style={({marginTop:'40px', display: deviceSelected[2].display})}>
                      <Row>
                        <Table responsive>
                          <thead>
                            <tr>
                              {(listinoPrezzi === 'iphone') ? <th>Sostituzione batteria</th> : ''}
                              {(listinoPrezzi === 'iphone') ? <th>Riparazione display</th> : ''}
                              <th>Riparazione intera unità</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              {(listinoPrezzi === 'iphone') ? (
                                <td>
                                  <Typography {...CardProps.TextProps}>
                                    {'€ '}
                                    {deviceSelected[3].repairBattery}
                                    {',00'}
                                  </Typography>
                                </td>
                              ) : ''}
                              {(listinoPrezzi === 'iphone') ? (
                                <td>
                                  <Typography {...CardProps.TextProps}>
                                    {'€ '}
                                    {deviceSelected[4].repairDisplay}
                                    {',00'}
                                  </Typography>
                                </td>
                              ) : ''}
                              <td>
                                <Typography {...CardProps.TextProps}>
                                  {'€ '}
                                  {deviceSelected[5].repairDevice}
                                  {',00'}
                                </Typography>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                    </div>
                  </Card>
                </Fade>
              </Grid>
            </div>
          </Container>
        </Box>
      );
    }
    // eslint-disable-next-line no-unused-expressions
    default: {
      return (
        ''
      )
    }
  }
};

About.propTypes = {
  /**
   * Test
   */
  show: PropTypes.bool,
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  title: PropTypes.node,
  /**
   * Main content
   */
  text: PropTypes.node,
  /**
   * List of features
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Object with props for Icon component.
       * @See @pagerland/common/src/components/Icon
       */
      IconProps: PropTypes.object.isRequired,
      /**
       * Title of future
       */
      title: PropTypes.node.isRequired,
      /**
       * Description of future
       */
      text: PropTypes.node.isRequired,
    }),
  ),
  iphoneFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Object with props for Icon component.
       * @See @pagerland/common/src/components/Icon
       */
      IconProps: PropTypes.object.isRequired,
      /**
       * Title of future
       */
      title: PropTypes.node.isRequired,
      /**
       * Description of future
       */
      text: PropTypes.node.isRequired,
    }),
  ),
  macFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Object with props for Icon component.
       * @See @pagerland/common/src/components/Icon
       */
      IconProps: PropTypes.object.isRequired,
      /**
       * Title of future
       */
      title: PropTypes.node.isRequired,
      /**
       * Description of future
       */
      text: PropTypes.node.isRequired,
    }),
  ),
  iosFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Object with props for Icon component.
       * @See @pagerland/common/src/components/Icon
       */
      IconProps: PropTypes.object.isRequired,
      /**
       * Title of future
       */
      title: PropTypes.node.isRequired,
      /**
       * Description of future
       */
      text: PropTypes.node.isRequired,
    }),
  ),
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Caption wrapper props
   * @See @pagerland/common/src/components/Box
   */
  SupportProps: PropTypes.object,
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
  RepairStatusProps: PropTypes.object,
  /**
   *
   */
  IosGridProps: PropTypes.object,
  /**
   *
   */
  IphoneGridProps: PropTypes.object,
  /**
   *
   */
  MacGridProps: PropTypes.object,
  /**
   * Features component grid props
   * @See @pagerland/common/src/components/Grid
   */
  ListinoGridProps: PropTypes.object,/**
   * Features component grid props
   * @See @pagerland/common/src/components/Grid
   */
  FeaturesGridProps: PropTypes.object,
  /**
   * Object with feature card specified props
   */
  CardProps: PropTypes.shape({
    /**
     * Title text props
     * @See @pagerland/common/src/components/Typography
     */
    TitleProps: PropTypes.object,
    /**
     * Object with props for Icon component.
     * @See @pagerland/common/src/components/Icon
     */
    IconProps: PropTypes.object,
    /**
     * Future description text props
     * @See @pagerland/common/src/components/Typography
     */
    TextProps: PropTypes.object,
  }),
};

About.defaultProps = {
  ...data.about,
  TestProps: true,
  WrapperProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  SupportProps:{
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
  ListinoGridProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(1, 1fr)',
    },
  },
  FeaturesGridProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(4, 1fr)',
    },
  },
  RepairStatusProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(1, 1fr)',
    },
  },
  IphoneGridProps: {
    my: 3,
      gridGap: '30px',
      gridTemplateColumns: {
      _: '1fr',
        lg: 'repeat(2, 1fr)',
    },
  },
  IosGridProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
  },
  MacGridProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(2, 1fr)',
    },
  },
  CardProps: {
    textAlign: 'center',
    IconProps: {
      fontSize: 48,
    },
    TitleProps: {
      as: 'h4',
      variant: 'h4',
      mt: 4,
      mb: 3,
    },
    TextProps: {
      color: 'gray.1',
    },
  },
};

export default About;
