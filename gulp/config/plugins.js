import replace from 'gulp-replace'; // поиск и замена
import plumber from 'gulp-plumber'; // обработка ошибок
import notify from 'gulp-notify';  // подсказки
import browsersync from 'browser-sync'; 
import newer from 'gulp-newer'; // проверка обновлений
// import gulpIf from 'gulp-if'; // проверка условий

export const plugins = {
  replace,
  plumber,
  notify,
  browsersync,
  newer
};