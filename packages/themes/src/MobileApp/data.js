import * as Yup from 'yup';

import WebGrid from '@pagerland/icons/src/line/WebGrid';
import BedDouble from '@pagerland/icons/src/line/BedDouble';
import Bath from '@pagerland/icons/src/line/Bath';
import CarSideview from '@pagerland/icons/src/line/CarSideview';
import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Dna from '@pagerland/icons/src/line/Dna';
import Flask from '@pagerland/icons/src/line/Flask';
import Atom from '@pagerland/icons/src/line/Atom';
import CheckCircle from '@pagerland/icons/src/line/CheckCircle';
import Gift from '@pagerland/icons/src/line/Gift';
import Coffee from '@pagerland/icons/src/line/Coffee';
import Medal from '@pagerland/icons/src/line/Medal';
import LightbulbAlt from '@pagerland/icons/src/line/LightbulbAlt';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import background from './assets/background.jpg';

import firstFuture from './assets/frist-feature.svg';
import secondFuture from './assets/second-feature.svg';
import thirdFuture from './assets/third-feature.svg';

import Phone1 from './assets/screenshots/Phone-1.png';
import Phone1x2 from './assets/screenshots/Phone-1@2x.png';
import Phone2 from './assets/screenshots/Phone-2.png';
import Phone2x2 from './assets/screenshots/Phone-2@2x.png';
import Phone3 from './assets/screenshots/Phone-3.png';
import Phone3x2 from './assets/screenshots/Phone-3@2x.png';
import Phone4 from './assets/screenshots/Phone-4.png';
import Phone4x2 from './assets/screenshots/Phone-4@2x.png';
import Phone5 from './assets/screenshots/Phone-5.png';
import Phone5x2 from './assets/screenshots/Phone-5@2x.png';
import Phone6 from './assets/screenshots/Phone-6.png';
import Phone6x2 from './assets/screenshots/Phone-6@2x.png';

import male from './assets/clients/photo-male.jpg';
import malex2 from './assets/clients/photo-male@2x.jpg';
import female from './assets/clients/photo-female.jpg';
import femalex2 from './assets/clients/photo-female@2x.jpg';

export default {
  title: 'Mobile App',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      {
        to: 'about',
        label: 'Assistenza',
      },
      {
        to: 'repair',
        label: 'Stato riparazione',
      },
      {
        to: 'features',
        label: 'Appuntamenti',
      },
      {
        to: 'contact',
        label: 'Contattaci',
      },
    ],
  },
  welcome: {
    background: {
      src: background,
      srcSet: `${background} 1x`,
      alt: 'Real Estate',
    },
    title: '40 anni di esperienza al tuo servizio',
    price: '$2,400,000',
    features: [
      {
        IconProps: {
          icon: WebGrid,
        },
        title: 'Assistenza',
      },
      {
        IconProps: {
          icon: BedDouble,
        },
        title: 'Vendita',
      },
      {
        IconProps: {
          icon: Bath,
        },
        title: 'Formazione',
      },
      {
        IconProps: {
          icon: CarSideview,
        },
        title: 'Ritiro usato',
      },
    ],
    cta: {
      to: 'about',
      children: 'Learn more',
    },
  },
  footer: {
    section1: {
      text: `nasce a Verona nel 1980.`,
    },
    contact: {
      title: 'Contatti',
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(`via Caserma Ospital Vecchio, 6B\n37135 Verona`),
        },
        {
          icon: Phone,
          text: '045 8000 846',
        },
        {
          icon: Envelope,
          text: 'apple@mos80.it',
        },
      ],
    },
    section3: {
      title: 'Support & downloads',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor et dolor eleifend.`,
    },
  },
  about: {
    title: 'Come possiamo aiutarti?',
    text: `Seleziona il dispositivo per cui necessiti di assistenza o vuoi verificarne lo stato della riparazione`,
    iphoneFeatures: [
      {
        id: 'iphone_1',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Portalo con te per la riparazione',
        text: 'Via Caserma Ospital Vecchio, 6B',
        button: 'Apri Google Maps',
        linkButton:'https://www.google.it/maps/place/Mos80+-+Apple+Centro+Assistenza+Autorizzato/@45.4341823,10.9966484,15.42z/data=!4m5!3m4!1s0x0:0x4be80535b9871de!8m2!3d45.4362818!4d10.9942782',
        showButton: ''
      },
      {
        id: 'iphone_2',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Chatta con un nostro tecnico',
        text: 'Il miglior supporto da tecnici certificati Apple',
        // eslint-disable-next-line no-script-url
        linkButton: 'javascript:Kommunicate.startConversation()',
        button: 'Apri chat',
        showButton: ''
      },
      {
        id: 'iphone_3',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Listino prezzi iPhone',
        text: 'Principali costi di riparazione',
        device: 'iphone',
        button: 'Apri listino',
      },
      {
        id: 'iphone_4',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Listino prezzi iPad',
        text: 'Principali costi di riparazione',
        button: 'Apri listino',
        device: 'ipad'
      },
    ],
    macFeatures: [
      {
        id: 'mac_1',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Portalo con te per la riparazione',
        text: 'Via Caserma Ospital Vecchio, 6B',
        button: 'Apri Google Maps',
        linkButton:'https://www.google.it/maps/place/Mos80+-+Apple+Centro+Assistenza+Autorizzato/@45.4341823,10.9966484,15.42z/data=!4m5!3m4!1s0x0:0x4be80535b9871de!8m2!3d45.4362818!4d10.9942782',
        showButton: ''
      },
      {
        id: 'mac_2',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Chatta con un nostro tecnico',
        text: 'Il miglior supporto da tecnici certificati Apple',
        button: 'Apri chat',
        // eslint-disable-next-line no-script-url
        linkButton: 'javascript:Kommunicate.startConversation()',
        showButton: ''
      }
    ],
    iosFeatures: [
      {
        id: 'ios_1',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Portalo con te per la riparazione',
        text: 'Via Caserma Ospital Vecchio, 6B',
        button: 'Apri Google Maps',
        linkButton:'https://www.google.it/maps/place/Mos80+-+Apple+Centro+Assistenza+Autorizzato/@45.4341823,10.9966484,15.42z/data=!4m5!3m4!1s0x0:0x4be80535b9871de!8m2!3d45.4362818!4d10.9942782',
        showButton: '',
      },
      {
        id: 'ios_2',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Chatta con un nostro tecnico',
        text: 'Il miglior supporto da tecnici certificati Apple',
        button: 'Apri chat',
        // eslint-disable-next-line no-script-url
        linkButton: 'javascript:Kommunicate.startConversation()',
        showButton: ''
      },
      {
        id: 'ios_3',
        appleWatch: 'Listino prezzi Apple Watch',
        airpods: 'Listino prezzi Airpods',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Listino prezzi',
        text: 'Principali costi di riparazione',
        button: 'Apri listino',
      },
    ],
    features: [
      {
        id: 'mac',
        IconProps: {
          icon: Dna,
          gradient: 'tertiary',
        },
        title: 'Mac',
        text: '',
      },
      {
        id: 'iphone',
        IconProps: {
          icon: Flask,
          gradient: 'primary',
        },
        title: 'iPhone/iPad',
        text: '',
      },
      {
        id: 'airpods',
        IconProps: {
          icon: Atom,
          gradient: 'quaternary',
        },
        title: 'Airpods',
        text: '',
      },
      {
        id: 'applewatch',
        IconProps: {
          icon: Atom,
          gradient: 'quaternary',
        },
        title: 'Apple Watch',
        text: '',
      },
    ],
    mac: [
      {
        id: '1',
      },
      {
        id: '2',
      }
    ],
    iphone: [
      {
        id: '1',
      },
      {
        id: '2',
      },
      {
        id: '4',
      },
    ],
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: 'https://www.facebook.com/M0S80',
      title: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/mos80vr/',
      title: 'Instagram',
    },
  ],
  features: [
    {
      ImageProps: {
        src: firstFuture,
      },
      title: 'First feature',
      text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
      },
      title: 'Second feature',
      text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      title: 'Another features section',
      text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vestibulum neque.',
      list: [
        {
          IconProps: {
            icon: Gift,
            gradient: 'primary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: Coffee,
            gradient: 'tertiary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: Medal,
            gradient: 'secondary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: LightbulbAlt,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      ImageProps: {
        src: thirdFuture,
      },
      title: 'More amazing features',
      text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      list: [
        {
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
  ],
  screenshots: {
    title: 'Screenshots',
    text:
        'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    images: [
      {
        src: Phone1,
        srcSet: `${Phone1} 1x, ${Phone1x2} 2x`,
        alt: 'Phone 1',
      },
      {
        src: Phone2,
        srcSet: `${Phone2} 1x, ${Phone2x2} 2x`,
        alt: 'Phone 2',
      },
      {
        src: Phone3,
        srcSet: `${Phone3} 1x, ${Phone3x2} 2x`,
        alt: 'Phone 3',
      },
      {
        src: Phone4,
        srcSet: `${Phone4} 1x, ${Phone4x2} 2x`,
        alt: 'Phone 4',
      },
      {
        src: Phone5,
        srcSet: `${Phone5} 1x, ${Phone5x2} 2x`,
        alt: 'Phone 5',
      },
      {
        src: Phone6,
        srcSet: `${Phone6} 1x, ${Phone6x2} 2x`,
        alt: 'Phone 6',
      },
    ],
  },
  clients: {
    title: 'What clients say about us?',
    comments: [
      {
        author: 'Pat Cooper, Big Company SEO',
        text: `Elit officia consectetur mollit occaecat incididunt sunt labore ad est veniam cupidatat tempor. Deserunt veniam nostrud est ad enim labore sit dolore amet enim veniam ipsum. Ullamco cillum ad nulla quis aliquip fugiat veniam incididunt ipsum cupidatat. Lorem qui voluptate ut enim occaecat et ut eu aliquip culpa.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,
        },
      },
      {
        author: 'Orsola Jeroch, Bigger Company CTO',
        text: `Praesent nec commodo arcu. Vivamus convallis pretium malesuada. Aenean feugiat maximus suscipit. Fusce maximus aliquam ipsum, at hendrerit augue aliquet ac. Maecenas scelerisque, massa a fringilla imperdiet, velit purus gravida dolor, et blandit lorem nulla non eros.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
    ],
  },
  faq: {
    title: 'Do you have any questions?',
    text:
        'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    options: [
      {
        title: 'Cras quis dolor auctor mi varius tincidunt?',
        text:
            'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Mauris accumsan dolor et elementum dapibus?',
        text:
            'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Phasellus sollicitudin neque a odio varius, condimentum ultrices risus molestie?',
        text:
            'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Pellentesque fringilla non dolor ut convallis?',
        text:
            'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Integer imperdiet venenatis orci, ac dictum libero semper sit amet?',
        text:
            'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: 'USD',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'Beginner',
          price: {
            a: '$0',
            b: '$0',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: false,
            },
            {
              text: 'Nullam vitae tortor',
              check: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Choose beginner',
            ButtonProps: {
              as: 'a',
              href: 'https://mypagerland.app',
            },
          },
        },
        {
          title: 'Advanced',
          price: {
            a: '$12',
            b: '$120',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Choose advanced',
            ButtonProps: {
              as: 'a',
              href: 'https://mypagerland.app',
            },
          },
        },
        {
          title: 'Expert',
          price: {
            a: '$24',
            b: '$240',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: true,
            },
            {
              text: 'Fusce quis vestibulum',
              check: true,
            },
          ],
          button: {
            text: 'Choose expert',
            ButtonProps: {
              as: 'a',
              href: 'https://mypagerland.app',
            },
          },
        },
      ],
    },
  },
  contact: {
    title: 'Contattaci',
    text: textToMultiline("Hai una richiesta o bisogno di aiuto?\nContattaci ora."),
    sendButtonText: 'Invia messaggio',
    form: {
      validationSchema: Yup.object({
        firstName: Yup.string()
            .max(40, 'Massimo 40 caratteri.')
            .required('Campo obbligatorio'),
        email: Yup.string()
            .email('Inserisci un\'email valida')
            .required('Campo obbligatorio'),
        message: Yup.string()
            .min(10, 'Minimo 10 caratteri')
            .required('Campo obbligatorio'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Il form è stato inviato: ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          placeholder: 'Nome e cognome',
          initialValue: '',
        },
        {
          name: 'email',
          placeholder: 'E-mail',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'message',
          placeholder: 'Scrivi il tuo messaggio qui..',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  newsletter: {
    title: 'Stay always up to date',
    text: 'Sign up to our monthly newsletter and get news and grest special offers!',
    buttonText: 'Sign up',
    inputPlaceholder: 'Your email address',
  },
  copyright: '©2020 created by inowa',
};
