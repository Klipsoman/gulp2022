import replace from 'gulp-replace'; // поиск и замена
import plumber from 'gulp-plumber'; 
import notify from 'gulp-notify'; 
import browsersync from 'browser-sync'; 

export const plugins = {
  replace,
  plumber,
  notify,
  browsersync
};