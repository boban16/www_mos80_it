import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Sticky from 'react-sticky-el';
import absoluteUrl from 'next-absolute-url';

import Theme, { theme } from '@pagerland/themes/src/MobileApp';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  About,
  Repair,
  Features,
  Contact,
} from '@pagerland/themes/src/MobileApp/containers';

import preview from '@pagerland/themes/src/MobileApp/assets/preview.png';

import SEO from '../components/SEO';

const Landing1 = ({ url }) => (
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
      <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" />
      <script src="https://unpkg.com/axios/dist/axios.min.js" />
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true" />
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="true" />
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
    </Head>
    <SEO title="mos80" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar />
    </Sticky>

    <Welcome name="" />
    <About name="about" />
    <Repair name="repair" />
    <Features name="features" />
    <Contact name="contact" />
    <Footer />
    <Copyright />
  </Theme>
);

Landing1.propTypes = {
  url: PropTypes.string,
};

export const getServerSideProps = async ({ req }) => ({
  props: {
    url: absoluteUrl(req).origin,
  },
});

export default Landing1;
