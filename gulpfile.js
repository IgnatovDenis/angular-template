'use strict';
const gulp = require('gulp'),
    browserify = require('browserify'),
    browserSync = require("browser-sync").create(),
    vinylSource = require("vinyl-source-stream"),
    path = require('path'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

gulp.task('watch', function() {
    browserSync.init({
        proxy: 'localhost:3001',
        port: 3001,
        open: true,
        notify: true
    });

    gulp.watch('assets/**/*.scss', ['sass']);

    gulp.watch('assets/**/*.js', ['js']);

    gulp.watch('views/**/*.html', ['views']);

});

gulp.task('sass', function() {

    return gulp.src('assets/scss/app.scss')
        .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
        .pipe(plugins.concatCss("combine.scss"))
        .pipe(plugins.autoprefixer({
            browsers: ['last 25 versions']
        }))
        .pipe(plugins.minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(plugins.rename('main.css'))
        .pipe(plugins.cssUrlAdjuster({
            replace: ['../../', '../build/']
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return browserify('./assets/js/app.js')
        .bundle().on('error', function(error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(vinylSource('combine.js'))
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());

});

gulp.task('views', function buildHTML() {
  return gulp.src('views/**/*.html')
             .pipe(browserSync.stream());
});
