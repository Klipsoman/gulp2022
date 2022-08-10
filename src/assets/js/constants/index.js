const officeMapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aadca5b8707a0eed5062aa3999bea66a2a65813df393c1d567713fd4f5835a5f7&amp;width=100%&amp;height=356&amp;lang=ru_RU&amp;scroll=true';
const westMapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aadca5b8707a0eed5062aa3999bea66a2a65813df393c1d567713fd4f5835a5f7&amp;width=100%&amp;height=356&amp;lang=ru_RU&amp;scroll=true';
const eastMapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aadca5b8707a0eed5062aa3999bea66a2a65813df393c1d567713fd4f5835a5f7&amp;width=100%&amp;height=356&amp;lang=ru_RU&amp;scroll=true';

const getHeightMapSrc = (src, height) => {
  return src.replace(/height=(\d+)/, () => {
    return 'height' + '=' + height;
  })
};

export const mapsSrc = {
  officeMap: {
    large: officeMapSrc,
    big: getHeightMapSrc(officeMapSrc, 280),
    medium: officeMapSrc,
    small: getHeightMapSrc(officeMapSrc, 178),
  },
  westMap: {
    large: westMapSrc,
    big: getHeightMapSrc(westMapSrc, 280),
    medium: westMapSrc,
    small: getHeightMapSrc(westMapSrc, 178),
  },
  eastMap: {
    large: eastMapSrc,
    big: getHeightMapSrc(eastMapSrc, 280),
    medium: eastMapSrc,
    small: getHeightMapSrc(eastMapSrc, 178),
  },
};