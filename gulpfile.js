import gulp from 'gulp';

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: process.argv.includes('--build'),
  gulp,
  path,
  plugins
};

// импорт задач
// import { copy } from './gulp/task/copy.js';
import { reset } from './gulp/task/reset.js';
import { html } from './gulp/task/html.js';
import { server } from './gulp/task/server.js';
import { scss } from './gulp/task/scss.js';
import { js } from './gulp/task/js.js';
import { images } from './gulp/task/images.js';
import { fonts } from './gulp/task/fonts.js';

// Наблюдатель за изменениями файлов
function watcher() {
  // gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(html, scss, js, images, fonts);
// const mainTasks = gulp.parallel(copy, html, scss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));

gulp.task('default', dev);