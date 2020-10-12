import * as React from 'react';
import { ScheduleComponent, Day, Week, Month, Inject, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { L10n, loadCldr, Internationalization, isNullOrUndefined, Browser} from '@syncfusion/ej2-base';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/it/ca-gregorian.json'),
  require('cldr-data/main/it/numbers.json'),
  require('cldr-data/main/it/timeZoneNames.json'));

L10n.load({
  it: {
    schedule: {
      day: 'Giorno',
      week: 'Settimana',
      today: 'Oggi',
      month: 'Mese',
      newEvent: 'Richiesta appuntamento',
      saveButton: 'Conferma',
      cancelButton: 'Annulla'
    },
    recurrenceeditor: {
      repeat: 'Frequenza',
    },
  },
});

/**
 * Schedule remote data sample
 */
function Calendario(){
  let scheduleObj; let subjectObj;
  const instance = new Internationalization();
  const workingDays = [1, 2, 3, 4, 5, 6];
  const isBrowser = Browser.isDevice;
  const dataManger = new DataManager({
    url: 'https://9f68krods1.execute-api.eu-central-1.amazonaws.com/dev/api/calendarioFrontend',
    crudUrl: 'https://9f68krods1.execute-api.eu-central-1.amazonaws.com/dev/api/calendarioFrontend/batchData',
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });

  function onCreated(){
    scheduleObj.scrollTo(instance.formatDate(new Date(), { skeleton: 'hm' }));
  }

  // eslint-disable-next-line class-methods-use-this
  function isReadOnly(endDate){
    return (endDate < new Date());
  }

  function onActionBegin(args){
    if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
      let data;
      if (args.requestType === 'eventCreate') {
        // eslint-disable-next-line prefer-destructuring
        data = args.data[0];
      }
      else if (args.requestType === 'eventChange') {
        data = args.data;
      }
      if (!scheduleObj.isSlotAvailable(data)) {
        // eslint-disable-next-line no-param-reassign
        args.cancel = true;
      }
    }
  }

  function onEventRendered(args) {
    const {data} = args;
    if ( args.data.stato === 'Confermato') {
      // eslint-disable-next-line no-param-reassign
      args.element.style.backgroundColor = '#39c171';
    } else {
      // eslint-disable-next-line no-param-reassign
      args.element.style.backgroundColor = '#f5a145';
    }
    if (isReadOnly(data.EndTime)) {
      args.element.setAttribute('aria-readonly', 'true');
      args.element.classList.add('e-read-only');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  function onRenderCell(args) {
    if (args.element.classList.contains('e-work-cells')) {
      if (args.date < new Date()) {
        args.element.setAttribute('aria-readonly', 'true');
        args.element.classList.add('e-read-only-cells');
      }
    }
  }

  function onPopupOpen(args) {
    const {data} = args;
    if (args.type === 'Editor') {
      const formElement = args.element.querySelector('.e-schedule-form');
      const validator = (formElement).ej2_instances[0];
      validator.addRules('cognome', { required: [true, 'Questo campo è obbligatorio'] });
      validator.addRules('nome', { required: [true, 'Questo campo è obbligatorio'] });
      validator.addRules('email', { required: [true, 'Inserisci un\'indirizzo email valido'] });
    }
    if (args.type === 'Editor' && args.target.classList.contains('e-appointment')) {
      // eslint-disable-next-line no-param-reassign
      args.cancel = true;
    }
    if (args.type === 'Editor' || args.type === 'RecurrenceAlert' || args.type === 'DeleteAlert') {
      const target = (args.type === 'RecurrenceAlert' ||
        args.type === 'DeleteAlert') ? args.element[0] : args.target;
      if (!isNullOrUndefined(target) && target.classList.contains('e-work-cells')) {
        if ((target.classList.contains('e-read-only-cells')) ||
          (!scheduleObj.isSlotAvailable(data))) {
          // eslint-disable-next-line no-param-reassign
          args.cancel = true;
        }
      }
      else if (!isNullOrUndefined(target) && target.classList.contains('e-appointment') &&
        (isReadOnly(data.EndTime))) {
        // eslint-disable-next-line no-param-reassign
        args.cancel = true;
      }
    }
  }

  function onChange(){
    // eslint-disable-next-line no-undef
    const value = document.getElementById('labelCosti');
    // update the text and value property values in preoperty panel based on selected item in DropDownList
    if (subjectObj.value !== null) {
      switch(subjectObj.value[0]){
        case 'Passaggio dati iOS': {
          // eslint-disable-next-line no-undef
          document.getElementById('trSerial').style.display='none';
          // eslint-disable-next-line no-undef,no-multi-assign
          document.getElementById('divCosti').style.display='';
          // eslint-disable-next-line no-return-assign
          return (value.innerHTML = subjectObj.value === null ? 'null' : '<h6> dai €30,00 ai €90,00</h6>');
        }
        case 'Corso 1to1': {
          // eslint-disable-next-line no-undef
          document.getElementById('trSerial').style.display='none';
          // eslint-disable-next-line no-undef,no-multi-assign
          document.getElementById('divCosti').style.display='';
          // eslint-disable-next-line no-return-assign
          return (
            value.innerHTML = subjectObj.value === null ? 'null' : '<h6> €60,00</h6>'
          );
        }
        case 'Diagnostica, analisi dispositivo': {
          // eslint-disable-next-line no-undef,no-multi-assign
          document.getElementById('divCosti').style.display='none';
          // eslint-disable-next-line no-undef
          document.getElementById('trSerial').style.display='none';
          // eslint-disable-next-line no-return-assign
          return (
            value.innerHTML = subjectObj.value === null ? 'null' : (subjectObj.value.toString())
          );
        }
        case 'Riparazione display/batteria': {
          // eslint-disable-next-line no-undef,no-multi-assign
          document.getElementById('divCosti').style.display='none';
          // eslint-disable-next-line no-undef
          document.getElementById('trSerial').style.display='';
          // eslint-disable-next-line no-return-assign
          return (
            value.innerHTML = subjectObj.value === null ? 'null' : (subjectObj.value.toString())
          );
        }
        default: {
          return (
            ''
          )
        }
      }
    }
    return '';
  }

  // eslint-disable-next-line class-methods-use-this
  function editorTemplate(props) {
    return (props !== undefined ? (
      <div className="custom-event-editor" style={{ width: "100%", cellpadding: "5" }}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="e-textlabel" style={{ marginTop: '15px'}}><h6>Oggetto della richiesta</h6></label>
        <Row>
          <Col md={12}>
            <MultiSelectComponent
              id="subject"
              ref={scope => { subjectObj = scope; }}
              placeholder='Tipo richiesta'
              data-name="subject"
              className="e-field"
              style={{ width: '100%' }}
              dataSource={['Diagnostica, analisi dispositivo', 'Riparazione display/batteria','Corso 1to1','Passaggio dati iOS']}
              maximumSelectionLength={1}
              mode='Default'
              change={onChange}
            />
          </Col>
        </Row>
        <div id='divCosti' style={{display: 'none'}}>
          <Col md={12}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="e-textlabel" style={{ marginTop: '15px'}}><h6>Costi del servizio: </h6></label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label id='labelCosti' className="e-textlabel" style={{ marginTop: '15px'}} />
          </Col>
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <table className="custom-event-editor" style={{ width: '100%' }}>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <tbody>
            <tr>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="e-textlabel" style={{ marginTop: '15px'}}><h6>Dati anagrafici</h6></label>
            </tr>
            <tr>
              <td className="e-textlabel">Cognome</td>
              <td colSpan={4}>
                <input
                  id="cognome"
                  className="e-field e-input"
                  type="text"
                  name="cognome"
                  style={{ width: '100%' }}
                  placeholder='Cognome'
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Nome</td>
              <td colSpan={4}>
                <input
                  id="nome"
                  className="e-field e-input"
                  type="text"
                  name="nome"
                  style={{ width: '100%' }}
                  placeholder='Nome'
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Cellulare</td>
              <td colSpan={4}>
                <input
                  id="cellulare"
                  className="e-field e-input"
                  type="number"
                  name="cellulare"
                  style={{ width: '100%' }}
                  placeholder='Cellulare'
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Email</td>
              <td colSpan={4}>
                <input
                  id="email"
                  className="e-field e-input"
                  type="email"
                  name="email"
                  style={{ width: '100%' }}
                  placeholder='Email'
                />
              </td>
            </tr>
            <tr id='trSerial' style={{display:'none'}}>
              <td className="e-textlabel">Numero di serie/imei</td>
              <td colSpan={4}>
                <input
                  id="description"
                  className="e-field e-input"
                  type="text"
                  name="description"
                  style={{ width: '100%' }}
                  placeholder='Seriale/IMEI'
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{display: 'none'}}>
          <Row>
            <Col md={4}>
              {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
              <DateTimePickerComponent id="startTime" format='dd/MM/yy hh:mm a' data-name="startTime" value={new Date(props.startTime || props.StartTime)} className="e-field" />
            </Col>
          </Row>
        </div>
      </div>
    ) : <div />);
  }

  return(
    // eslint-disable-next-line no-return-assign,react/jsx-no-bind
    <ScheduleComponent
      // eslint-disable-next-line no-return-assign
      ref={schedule => scheduleObj = schedule}
      locale='it'
      startHour='9:00'
      endHour='19:00'
      workHours={{highlight: true, start: '9:00', end: '19:00'}}
      workDays={workingDays}
      showQuickInfo={isBrowser}
      showWeekend={false}
      timeScale={{slotCount: 2}}
      interval='30'
      width='100%'
      height='650px'
      selectedDate={new Date()}
      eventSettings={{
        dataSource: dataManger,
        fields: {
          id: 'id',
          subject: { title: 'subject', name: 'subject', validation: {required: true} },
          description: { title: 'description', name: 'description' },
          startTime: { title: 'startTime', name: 'startTime' },
          endTime: { title: 'endTime', name: 'endTime' },
        }
      }}
      // eslint-disable-next-line react/jsx-no-bind
      eventRendered={onEventRendered}
      // eslint-disable-next-line react/jsx-no-bind
      popupOpen={onPopupOpen}
      // eslint-disable-next-line react/jsx-no-bind
      actionBegin={onActionBegin}
      // eslint-disable-next-line react/jsx-no-bind
      renderCell={onRenderCell}
      // eslint-disable-next-line react/jsx-no-bind
      created={onCreated}
      // eslint-disable-next-line react/jsx-no-bind
      editorTemplate={editorTemplate}
    >
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='Month' />
      </ViewsDirective>
      <Inject services={[Day, Week, Month]} />
    </ScheduleComponent>
  )
}

export default Calendario;
