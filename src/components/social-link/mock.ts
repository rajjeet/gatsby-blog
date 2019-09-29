import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { TProps } from './types';

export const makeProps = (): TProps => ({
  link: '',
  icon: faFacebook,
  name: 'facebook',
  color: 'black',
});

