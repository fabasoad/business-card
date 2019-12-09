const log = require('fancy-log');
const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
require('dotenv').config();

const CI_BUILD_DIR = process.env.TRAVIS_BUILD_DIR;
const DEV_BUILD_DIR = 'docs';

let BUILD_DIR;

const defineDeploymentFolder = f => cb => {
    BUILD_DIR = f;
    log(`BUILD_DIR=${BUILD_DIR}`);
    cb();
};

gulp.task('pug', () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', log)
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('js', () => gulp.src('src/js/*.js')	
    .pipe(plumber())	
    .pipe(babel({presets: ['@babel/env']}))	
    .on('error', log)	
    .pipe(gulp.dest(`${BUILD_DIR}/assets/js`)));

gulp.task('sass', () => gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', log)
    .pipe(gulp.dest(`${BUILD_DIR}/assets/css`)));

gulp.task('assets', () => gulp.src('src/assets/**/*').pipe(gulp.dest(`${BUILD_DIR}/assets`)));

gulp.task('clean', () => {
    const rules = [`${BUILD_DIR}/assets`, `${BUILD_DIR}/index.html`];
    log(`Processing 'clean'. Deleting ${rules}...`);
    return del(rules);
});

gulp.task('ci-after-build', () => {
    const rules = [
        `${BUILD_DIR}/**`,
        `!${BUILD_DIR}`,
        `!${BUILD_DIR}/assets/**`,
        `!${BUILD_DIR}/index.html`
    ];
    log(`Processing 'ci-after-build'. Deleting ${rules}...`);
    return del(rules);
});

gulp.task('build', gulp.series('clean', gulp.parallel('assets', 'pug', 'sass', 'js')));

gulp.task('define-dev-folder', defineDeploymentFolder(DEV_BUILD_DIR));
gulp.task('clean-dev', gulp.series('define-dev-folder', 'clean'));
gulp.task('dev', gulp.series('define-dev-folder', 'build'));

gulp.task('define-ci-folder', defineDeploymentFolder(CI_BUILD_DIR));
gulp.task('ci', gulp.series('define-ci-folder', 'build', 'ci-after-build'));
