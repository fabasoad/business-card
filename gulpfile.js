const log = require('fancy-log');
const gulp = require('gulp');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
require('dotenv').config();

const BUILD_DIR = process.env.TRAVIS_BUILD_DIR || 'public';

gulp.task('dist', () => gulp.src('volo_components/**/*')
    .pipe(gulp.dest(`${BUILD_DIR}/dist`)));

gulp.task('pug', () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', log)
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('js', () => gulp.src('src/js/*.js')	
    .pipe(plumber())	
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .on('error', log)
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('sass', () => gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(concat('all.min.css'))
    .on('error', log)
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('i18n', () => gulp.src('src/i18n/**/*').pipe(gulp.dest(`${BUILD_DIR}/i18n`)));

gulp.task('assets', () => gulp.src('src/assets/**/*').pipe(gulp.dest(`${BUILD_DIR}/assets`)));

gulp.task('clean:all', () => {
    const rules = [
        `${BUILD_DIR}/assets`,
        `${BUILD_DIR}/i18n`,
        `${BUILD_DIR}/index.html`,
        `${BUILD_DIR}/dist`
    ];
    log(`Processing 'clean'. Deleting ${rules}...`);
    return del(rules);
});

gulp.task('clean:ci', () => {
    const rules = [
        `${BUILD_DIR}/**`,
        `!${BUILD_DIR}`,
        `!${BUILD_DIR}/assets/**`,
        `!${BUILD_DIR}/i18n/**`,
        `!${BUILD_DIR}/index.html`,
        `!${BUILD_DIR}/dist`
    ];
    log(`Deleting ${rules}...`);
    return del(rules);
});

gulp.task('build', gulp.series('clean:all', gulp.parallel('assets', 'dist', 'pug', 'sass', 'js', 'i18n')));
