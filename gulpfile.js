/**
 * Created by MATIASJ on 26/12/2016.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass');

gulp.task('start', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
})

gulp.task('sass', function () {
    return gulp.src('./client/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./client/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'start', 'sass:watch']);
