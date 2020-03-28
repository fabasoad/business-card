require('dotenv').config();

const log = require('fancy-log');
const gulp = require('gulp');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const coffee = require('gulp-coffee');
const babel = require('gulp-babel');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');

const BUILD_DIR = process.env.TRAVIS_BUILD_DIR || 'public';

gulp.task('pug', () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', log)
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('scripts', () => gulp.src('src/scripts/*.coffee')	
    .pipe(plumber())	
    .pipe(coffee({ bare: true }))
    .pipe(babel({ presets: [ "@babel/env" ] }))
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

gulp.task('clean', () => {
    const rules = [
        `${BUILD_DIR}/assets`,
        `${BUILD_DIR}/i18n`,
        `${BUILD_DIR}/index.html`,
        `${BUILD_DIR}/dist`
    ];
    log(`Processing 'clean'. Deleting ${rules}...`);
    return del(rules);
});

gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'pug', 'sass', 'scripts', 'i18n')));
