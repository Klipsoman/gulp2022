import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
  .pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: 'SCSS',
    message: 'Error: <%= error.message %>'
  })))
  .pipe(sass({
    outputStyle: 'expanded',
    includePaths: ['node_modules']
  }))
  .pipe(app.plugins.replace(/@img\//g, ''))
  .pipe(autoprefixer({
    grid: true,
    overrideBrowserlist: ['last 5 versions'],
    cascade: true
  }))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browsersync.stream());
};