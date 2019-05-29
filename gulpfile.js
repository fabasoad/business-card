const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

gulp.task('watch', gulp.parallel('pug','sass','js','assets', () => {
    gulp.watch(['src/scss/*.scss','src/scss/**/*.scss'], ['sass']);
    gulp.watch(['src/pug/*.pug','src/pug/components/*.pug'], ['pug']);
    gulp.watch(['src/assets/**/*'], ['assets']);
    gulp.watch(['src/js/*'], ['js']);
}));

gulp.task('pug', () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', gutil.log)
    .pipe(gulp.dest('docs')));

gulp.task('js', () => gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({presets: ['env']}))
    .on('error', gutil.log)
    .pipe(gulp.dest('docs/assets/js')));

gulp.task('sass', () => gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('docs/assets/css')));

gulp.task('assets', () => gulp.src('src/assets/**/*').pipe(gulp.dest('docs/assets')));

gulp.task('clean', () => del.sync(['docs/**', '!docs', '!docs/bower_components', '!docs/bower_components/**']));

gulp.task('cssvendor', () => gulp.src('src/scss/vendor/**/*')
        .pipe(gulp.dest('docs/assets/css/vendor')));

gulp.task('default', gulp.parallel('clean', 'assets', 'cssvendor', 'pug', 'sass', 'js'));