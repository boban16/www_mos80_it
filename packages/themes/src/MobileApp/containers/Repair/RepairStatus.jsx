import React, { useState } from 'react';
import Grid from '@pagerland/common/src/components/Grid';
import Fade from 'react-reveal/Fade';
import Card from '@pagerland/common/src/components/Card';
import Typography from '@pagerland/common/src/components/Typography';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Box from '@pagerland/common/src/components/Box';
import data from '../../data';

const RepairStatus = ({
  RepairStatusProps,
  CardProps,
  TitleProps,
  TextProps,
  CaptionProps
  }) => {
  const apiUrl = 'https://cors-anywhere.herokuapp.com/http://mos80.xplants.eu/Apps/WebObjects/Mos80.woa/wa/DA/status?q=';

  const [scheda, setScheda] = useState({scheda: ''});
  const [seriale, setSeriale] = useState({seriale: ''});
  const [sedeRiparazione, setSedeRiparazione] = useState({center: ''});
  const [idRiparazione, setIdRiparazione] = useState({id: ''});
  const [statusRiparazione, setStatusRiparazione] = useState({status:''});
  // const [tecnicoRiparazione, setTecnicoRiparazione] = useState({tecnico: ''});
  const [mostraStato, setMostraStato] = useState({display: 'none'});

  function checkStatus(a, b) {
    // eslint-disable-next-line func-names
      axios({ method: 'get', url: `${apiUrl+a}&sn=${b}` }).then(function (response) {
      // handle success
      setMostraStato({display:''});
      setSedeRiparazione({center: response.data.center});
      setIdRiparazione({id: response.data.id});
      setStatusRiparazione({status: response.data.status});
      // setTecnicoRiparazione({tecnico: response.data.tecnico});
        // eslint-disable-next-line func-names
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
      // eslint-disable-next-line func-names
      .then(function () {
        // always executed
      });
  }

  function returnStatus() {
    switch (statusRiparazione.status) {
      case 0: {
        return(
          <div>
            La riparazione
            {' '}
            <b>
              {idRiparazione.id}
            </b>
            {' '}
            è stata presa in consegna presso la sede di
            {' '}
            <b>
              {sedeRiparazione.center}
            </b>
            {' '}
            e verrà presto gestita dai nostri tecnici.
            <br />
            <a href="https://api.whatsapp.com/send?phone=390458000846&text=Salve,%20vorrei%20qualche%20informazione%20in%20merito%20alla%20mia%20riparazione." alt="Scrivici con WhatsApp allo 045 8000 846">Scrivici con WhatsApp per ulteriori info</a>
          </div>
        )
      }
      case 1: {
        return(
          <div>
            Siamo in attesa delle parti di ricambio necessarie per completare la riparazione.
            <br />
            <a href="https://api.whatsapp.com/send?phone=390458000846&text=Salve,%20vorrei%20qualche%20informazione%20in%20merito%20alla%20mia%20riparazione." alt="Scrivici con WhatsApp allo 045 8000 846">Scrivici con WhatsApp per ulteriori info</a>
          </div>
        )
      }
      case 2: {
        return(
          <div>
            Il prodotto è stato preso in consegna da un nostro tecnico ed è in lavorazione.
            <br />
            <a href="https://api.whatsapp.com/send?phone=390458000846&text=Salve,%20vorrei%20qualche%20informazione%20in%20merito%20alla%20mia%20riparazione." alt="Scrivici con WhatsApp allo 045 8000 846">Scrivici con WhatsApp per ulteriori info</a>
          </div>
        )
      }
      case 3: {
        return(
          <div>
            Un nostro tecnico è in contatto con Apple, lo stato della riparazione verrà aggiornato nelle prossime ore.
            <br />
            <a href="https://api.whatsapp.com/send?phone=390458000846&text=Salve,%20vorrei%20qualche%20informazione%20in%20merito%20alla%20mia%20riparazione." alt="Scrivici con WhatsApp allo 045 8000 846">Scrivici con WhatsApp per ulteriori info</a>
          </div>
        )
      }
      case 4: {
        return(
          <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            E' stato inviato alla sua caselle di posta elettronica un preventivo, siamo in attesa dell'accettazione per procedere con la riparazione <br />
            <a href="https://api.whatsapp.com/send?phone=390458000846&text=Salve,%20vorrei%20qualche%20informazione%20in%20merito%20alla%20mia%20riparazione." alt="Scrivici con WhatsApp allo 045 8000 846">Scrivici con WhatsApp per ulteriori info</a>
          </div>
        )
      }
      case 5: {
        return(
          <div>
            Siamo in attesa della disattivazione di trova il mio iPhone
            <br />
            <a href="https://api.whatsapp.com/send?phone=390458000846&text=Salve,%20vorrei%20qualche%20informazione%20in%20merito%20alla%20mia%20riparazione." alt="Scrivici con WhatsApp allo 045 8000 846">Scrivici con WhatsApp per ulteriori info</a><br />
            <a href="https://support.apple.com/it-it/HT204233">o consulta la guida</a>
          </div>
        )
      }
      case 6: {
        return(
          <div>
            La riparazione è stata ultimata ed il prodotto è pronto per il ritiro presso la sede di
            {' '}
            <b>
              {sedeRiparazione.center}
            </b>
          </div>
        )
      }
      case 7: {
        return(
          <div>
            Il prodotto è stato consegnato
          </div>
        )
      }
      default: {
        return (
          ''
        )
      }
    }
  }

  function onChangeScheda(event){
    setScheda({scheda: event.value})
  }

  function onChangeSeriale(event) {
    setSeriale({seriale: event.value})
  }

  return(
    <div className="statoDellaRiparazione" style={{marginTop: '50px'}}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600} delay={500}>
          <Typography {...TitleProps}>Stato della riparazione</Typography>
          <Typography {...TextProps}>Verifica ora lo stato di avanzamento della tua riparazione.</Typography>
        </Fade>
      </Box>
      <Grid {...RepairStatusProps}>
        <Fade bottom duration={600} delay={600}>
          <Card {...CardProps}>
            <Row>
              <Col md={{span: 10, offset: 1}}>
                <Typography {...TextProps}>Troverai il numero della pratica e il numero di serie del tuo dispositivo sulla scheda che ti è stata consegnata in negozio.</Typography>
              </Col>
            </Row>
            <div className="row custom-margin custom-padding-5 material2" style={{marginTop: '20px'}}>
              <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <TextBoxComponent placeholder="Numero scheda riparazione" cssClass="e-outline" floatLabelType="Auto" value={scheda.scheda} change={onChangeScheda} />
              </div>
              <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                <TextBoxComponent placeholder="Seriale" cssClass="e-outline" floatLabelType="Auto" value={seriale.seriale} change={onChangeSeriale} />
              </div>
            </div>
            <Button type="button" style={{marginTop: '20px'}} onClick={() => checkStatus(scheda.scheda, seriale.seriale)}>Verifica ora</Button>
            <div className='divStatus' style={({marginTop:'30px', mostraStato})}>
              <Fade bottom duration={600}>
                <Typography {...TextProps}>
                  <Col md={{span: 8, offset: 2}}>
                    {(statusRiparazione !== '') ? returnStatus() : null}
                  </Col>
                </Typography>
              </Fade>
            </div>
          </Card>
        </Fade>
      </Grid>
    </div>
  )
};

RepairStatus.propTypes = {
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
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

RepairStatus.defaultProps = {
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
  RepairStatusProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(1, 1fr)',
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
export default RepairStatus;
