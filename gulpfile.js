/**
 * Created by MATIASJ on 26/12/2016.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-clean-css'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass');

gulp.task('start', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('sass', function () {
    return gulp.src('./client/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./client/sass/**/*.scss', ['sass', 'minify-css']);
});

gulp.task('minify-css', function(){
    gulp.src('./client/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./client/css'))
});

gulp.task('default', ['sass', 'minify-css', 'start', 'sass:watch']);
