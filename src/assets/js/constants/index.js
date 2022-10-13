const officeMapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aadca5b8707a0eed5062aa3999bea66a2a65813df393c1d567713fd4f5835a5f7&amp;width=100%&amp;height=356&amp;lang=ru_RU&amp;scroll=true';
const westMapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adbc380ad17080783358ce9a529886e78d949fbde948da00c428ecc06c56288f0&amp;width=100%&amp;height=356&amp;lang=ru_RU&amp;scroll=true';
const southMapSrc = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abdbfd8ee0acfa5637024d0bee21a4ae25a1e31da2da0a8931b7e87a70a67f8c5&amp;width=100%&amp;height=356&amp;lang=ru_RU&amp;scroll=true';

"https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adbc380ad17080783358ce9a529886e78d949fbde948da00c428ecc06c56288f0&amp;width=761&amp;height=405&amp;lang=ru_RU&amp;scroll=true"

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
  southMap: {
    large: southMapSrc,
    big: getHeightMapSrc(southMapSrc, 280),
    medium: southMapSrc,
    small: getHeightMapSrc(southMapSrc, 178),
  },
  gatchinaMap: {
    large: getHeightMapSrc(westMapSrc, 496),
    big: getHeightMapSrc(westMapSrc, 397),
    medium: getHeightMapSrc(westMapSrc, 295),
    small: getHeightMapSrc(westMapSrc, 300),
  },
  nevinnomiskMap: {
    large: getHeightMapSrc(southMapSrc, 496),
    big: getHeightMapSrc(southMapSrc, 397),
    medium: getHeightMapSrc(southMapSrc, 295),
    small: getHeightMapSrc(southMapSrc, 300),
  }
};