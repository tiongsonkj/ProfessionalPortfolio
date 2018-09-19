const gulp = require('gulp');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('compile-sass', function(callback) {

    return gulp.src('sass/main.scss')
        .pipe(sass({ outputStyle: 'expanded', noCache:true })).on('error', errorHandler)
        .pipe(gulp.dest('./css'))
        .pipe(minify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'))
        .pipe(notify("CSS compiled"));
});

// watch for changes in file
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['compile-sass']);
});

function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}