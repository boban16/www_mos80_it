import * as _ from 'lodash';
import {
  borders,
  color,
  background,
  compose,
  space,
  layout,
  position,
  flexbox,
  typography,
  gridArea,
} from 'styled-system';

export const theme = (themeKey, omitMain = false) => props =>
  _.get(props, `theme.${themeKey}${!omitMain ? '.main' : ''}`);

export const base = compose(
  background,
  borders,
  color,
  space,
  flexbox,
  typography,
  layout,
  position,
  gridArea,
);

export const variant = data => props => theme(`${data.scale}.${props[data.prop]}`, true)(props);

export const smoothLinkProps = {
  smooth: true,
  spy: true,
  offset: -80,
  duration: 700,
};
