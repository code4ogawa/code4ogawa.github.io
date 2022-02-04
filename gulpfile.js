const gulp = require('gulp');
const htmlbeautify = require('gulp-html-beautify')
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));

const PATH = 'src/**/';
 
/* EJS */
gulp.task('ejs', done => {
  gulp
    .src([`${PATH}*.ejs`, `!${PATH}_*.ejs`])
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, '$1'))
    .pipe(htmlbeautify({
      'indent_size': 2,
      'end_with_newline': true
    }))
    .pipe(gulp.dest('./docs/'));
  done();
});

/* Sass */
gulp.task('sass', done => {
  gulp
    .src(`${PATH}*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs/assets/'));
  done();
});

/* Watch */
gulp.task('watch', () => {
  gulp.watch(`${PATH}_*.ejs`, gulp.series('ejs'));
  gulp.watch(`${PATH}*.ejs`, gulp.series('ejs'));
  gulp.watch(`${PATH}*.scss`, gulp.series('sass'));
});
