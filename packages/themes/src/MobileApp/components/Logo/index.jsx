import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

import logo from '../../assets/LogoMos.png';

const Img = styled.img`
  display: block;
  ${base};
`;

const Logo = props => <Img src={logo} alt="mos80 srl" {...props} style={{height: '40px'}} />;

export default Logo;
