/**
 * Created by MATIASJ on 26/12/2016.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-clean-css'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    imageResize = require('gulp-image-resize');

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
        .pipe(gulp.dest('./client/sass/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./client/sass/**/*.scss', ['sass', 'minify-css']);
});

gulp.task('minify-css', function(){
    gulp.src('./client/sass/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./client/css'))
});

/* ---------- Ejecutar manualmente ------------ */
gulp.task('thumbnailify', function () {
    gulp.src('./client/img/hotels/h_emp_1.jpg')
        .pipe(imageResize({
            width : 100,
            height : 100,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('./client/img/thumbnails'));
});
/* ---------- Fin ejecutar Manualmente ------- */

gulp.task('default', ['sass', 'minify-css', 'start', 'sass:watch']);
