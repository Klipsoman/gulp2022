import webpack from 'webpack-stream';

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>'
      })
    ))
    // Если нужен один входящий файл .js убрать коммент здесь и в path
    // .pipe(webpack({
    //   mode: 'development',
    //   output: {
    //     filename: 'index.js'
    //   }
    // }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};