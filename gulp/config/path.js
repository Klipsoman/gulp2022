import * as nodePath from 'path';

// получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build';
const srcFolder = './src';

export const path = {
  build: {
    css: `${buildFolder}/css`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files`
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*` // выбираем файлы и папки с любым расширением на любом уровне вложенности внутри папки files
  },
  watch: {
    scss: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ''
}