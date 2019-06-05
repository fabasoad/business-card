const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

const DEPLOYMENT_FOLDER = '.';

gulp.task('pug', async () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', gutil.log)
    .pipe(gulp.dest(DEPLOYMENT_FOLDER)));

gulp.task('js', async () => gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({presets: ['@babel/env']}))
    .on('error', gutil.log)
    .pipe(gulp.dest(`${DEPLOYMENT_FOLDER}/assets/js`)));

gulp.task('sass', async () => gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest(`${DEPLOYMENT_FOLDER}/assets/css`)));

gulp.task('assets', async () => gulp.src('src/assets/**/*').pipe(gulp.dest(`${DEPLOYMENT_FOLDER}/assets`)));

gulp.task('clean', async () => del.sync([`${DEPLOYMENT_FOLDER}/**`, `!${DEPLOYMENT_FOLDER}`, `!${DEPLOYMENT_FOLDER}/bower_components`, `!${DEPLOYMENT_FOLDER}/bower_components/**`]));

gulp.task('default', gulp.series('clean', 'assets', gulp.parallel('pug', 'sass', 'js')));
