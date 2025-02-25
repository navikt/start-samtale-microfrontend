const isProduction = window.location.href.includes('www.nav.no');
const isDevelopment = window.location.href.includes('.dev.nav.no');

export const getEnvironment = () => {
  if (isProduction) {
    return 'production';
  }

  if (isDevelopment) {
    return 'development';
  }

  return 'local';
};

const START_SAMTALE_URL = {
  local: 'https://pto.ekstern.dev.nav.no/arbeid/start-samtale',
  development: 'https://pto.ekstern.dev.nav.no/arbeid/start-samtale',
  production: 'https://nav.no/arbeid/start-samtale',
};

export const startSamtaleLenke = START_SAMTALE_URL[getEnvironment()];
