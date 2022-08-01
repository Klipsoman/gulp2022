import * as nodePath from 'path';

// получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/assets/js/`,
    css: `${buildFolder}/`,
    html: `${buildFolder}/`,
    // files: `${buildFolder}/files/`,
    images: `${buildFolder}/assets/images`,
    fonts: `${buildFolder}/assets/fonts`
  },
  src: {
    // Если нужен один входящий файл .js убрать коммент здесь и в task/js.js
    // js: `${srcFolder}/assets/js/index.js`,
    js: `${srcFolder}/assets/js/**/*.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/**/*.html`,
    // files: `${srcFolder}/files/**/*.*`, // выбираем файлы и папки с любым расширением на любом уровне вложенности внутри папки files
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/assets/images/**/*.svg`,
    // fonts: `${buildFolder}/assets/fonts/*.*`,
  },
  watch: {
    js: `${srcFolder}/assets/js/**/*.js`,
    scss: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/**/*.html`,
    // files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ''
}