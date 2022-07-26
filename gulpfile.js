import gulp from 'gulp';

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path,
  gulp,
  plugins
};

import { copy } from './gulp/task/copy.js';
import { reset } from './gulp/task/reset.js';
import { html } from './gulp/task/html.js';
import { server } from './gulp/task/server.js';
import { scss } from './gulp/task/scss.js';

// Наблюдатель за изменениями файлов
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
}

const mainTasks = gulp.parallel(copy, html, scss);

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));

gulp.task('default', dev);