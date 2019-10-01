const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const theme = {
  primaryColor: '#2185d0',
  softPrimaryColor: '#d0eaff',
  secondaryColor: '#f3711c',
  primaryTextColor: '#333',
  lightBackgroundColor: '#f5f5f5',
  lightTextColor: '#888',
  darkerTextColor: '#696969',
  white: '#fff',
  borderRadius: '5px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  hoverBoxShadow: '0 4px 9px 0 rgba(0,0,0,0.6)',
  lightBoxShadow: '0 4px 4px 0 rgba(0,0,0,0.15)',
  deviceSize: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
};
