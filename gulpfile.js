var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');

// Optimize HTML
gulp.task('htmlmin', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);

// Optimize CSS
gulp.task('minify', function() {
    gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('dist/css'));
});

// Optimize JS
gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Running the functions
gulp.task('default', function(callback) {
    runSequence(
        ['imageMin', 'htmlmin', 'minify', 'scripts'],
        callback
    );
});

gulp.task('watch', function() {
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/css/*.css', ['minify']);
    gulp.watch('src/js/*.js', ['scripts']);
});