const gulp = require('gulp');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const replace = require('gulp-replace');
 
gulp.task('ejs', done => {
  gulp
    .src(['ejs/**/*.ejs', '!ejs/**/_*.ejs'])
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, '$1'))
    .pipe(gulp.dest('./html/'));
  done();
});
 
gulp.task('watch', () => {
  gulp.watch('ejs/**/_*.ejs', gulp.series('ejs'));
  gulp.watch('ejs/**/*.ejs', gulp.series('ejs'));
});
