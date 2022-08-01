import fileinclude from "gulp-file-include";

export const html = () => {
  return app.gulp.src([
    app.path.src.html,
    '!./src/html-templates/*.html'
  ])
  .pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: 'HTML',
    message: 'Error: <%= error.message %>'
  })))
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(app.plugins.replace(/@img\//g, ''))
  .pipe(app.plugins.replace(/@html-templates\//g, ''))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browsersync.stream());
};