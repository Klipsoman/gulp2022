import { mapsSrc } from './constants/index.js'

export const createMaps = () => {
  const office = document.querySelector('#office');
  const westFactory = document.querySelector('#west-factory');
  const eastFactory = document.querySelector('#east-factory');

  if (!office && !westFactory && !eastFactory) {
    return;
  }

  const officeMap = office.querySelector('.location__map');
  const westFactoryMap = westFactory.querySelector('.factory__map');
  const eastFactoryMap = eastFactory.querySelector('.factory__map');

  const width = checkMedia(window.innerWidth);
  
  if (!width) return;

  const officeMapScript = createMapScript(width, mapsSrc.officeMap);
  const westMapScript = createMapScript(width, mapsSrc.westMap);
  const eastMapScript = createMapScript(width, mapsSrc.eastMap);

  if (officeMapScript) officeMap.append(officeMapScript);
  if (westMapScript) westFactoryMap.append(westMapScript);
  if (eastMapScript) eastFactoryMap.append(eastMapScript);

}

const checkMedia = (width) => {
  if (width >= 1400) return 'large';
  if (width >= 1000 && width < 1400) return 'big';
  if (width >= 640 && width < 1000) return 'medium';
  if (width < 640) return 'small';
  return null;
}

const createMapScript = (media, object) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;

  switch (media) {
    case 'large':
      script.src = object.large;
      break;
    case 'big':
      script.src = object.big;
      break;
    case 'medium':
      script.src = object.medium;
      break;
    case 'small':
      script.src = object.small;
      break;
    default:
      break;
  }

  return script.src ? script : null;
}