const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

const CI_DEPLOYMENT_FOLDER = '.';
const DEV_DEPLOYMENT_FOLDER = 'docs';

let CURRENT_DEPLOYMENT_FOLDER;

const cleanTask = {};
cleanTask[CI_DEPLOYMENT_FOLDER] = 'ci-clean';
cleanTask[DEV_DEPLOYMENT_FOLDER] = 'dev-clean';

const defineDeploymentFolder = f => () => {
    CURRENT_DEPLOYMENT_FOLDER = f;
    console.log(`Deployment folder: ${CURRENT_DEPLOYMENT_FOLDER}`);
};

gulp.task('pug', async () => gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .on('error', gutil.log)
    .pipe(gulp.dest(CURRENT_DEPLOYMENT_FOLDER)));

gulp.task('js', async () => gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(babel({presets: ['@babel/env']}))
    .on('error', gutil.log)
    .pipe(gulp.dest(`${CURRENT_DEPLOYMENT_FOLDER}/assets/js`)));

gulp.task('sass', async () => gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest(`${CURRENT_DEPLOYMENT_FOLDER}/assets/css`)));

gulp.task('assets', async () => gulp.src('src/assets/**/*').pipe(gulp.dest(`${CURRENT_DEPLOYMENT_FOLDER}/assets`)));

gulp.task('dev-clean', async () => del.sync([`${CURRENT_DEPLOYMENT_FOLDER}/assets`, `${CURRENT_DEPLOYMENT_FOLDER}/index.html`]));

gulp.task('ci-clean', async () => del.sync(['**']));

gulp.task('build', gulp.series('assets', gulp.parallel('pug', 'sass', 'js')));

gulp.task('define-dev-folder', defineDeploymentFolder(DEV_DEPLOYMENT_FOLDER));

gulp.task('define-ci-folder', defineDeploymentFolder(CI_DEPLOYMENT_FOLDER));

gulp.task('dev', gulp.series('define-dev-folder', 'dev-clean', 'build'));

gulp.task('ci', gulp.series('define-ci-folder', 'ci-clean', 'build'));
