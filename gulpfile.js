const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

const CI_DEPLOYMENT_FOLDER = gutil.env.TRAVIS_BUILD_DIR;
const DEV_DEPLOYMENT_FOLDER = 'docs';

let CURRENT_DEPLOYMENT_FOLDER;

const defineDeploymentFolder = f => cb => {
    CURRENT_DEPLOYMENT_FOLDER = f;
    console.log(`Deployment folder: ${CURRENT_DEPLOYMENT_FOLDER}`);
    cb();
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

gulp.task('clean', async cb => del.sync([`${CURRENT_DEPLOYMENT_FOLDER}/assets`, `${CURRENT_DEPLOYMENT_FOLDER}/index.html`], cb));

gulp.task('ci-after-build', function () {
    return del([
        `${CURRENT_DEPLOYMENT_FOLDER}/**`,
        `!${CURRENT_DEPLOYMENT_FOLDER}`,
        `!${CURRENT_DEPLOYMENT_FOLDER}/assets`,
        `!${CURRENT_DEPLOYMENT_FOLDER}/index.html`
    ], { force: true });
});

gulp.task('build', gulp.series('clean', 'assets', gulp.parallel('pug', 'sass', 'js')));

gulp.task('define-dev-folder', gulp.series(defineDeploymentFolder(DEV_DEPLOYMENT_FOLDER)));

gulp.task('define-ci-folder', gulp.series(defineDeploymentFolder(CI_DEPLOYMENT_FOLDER)));

gulp.task('dev', gulp.series('define-dev-folder', 'build'));

gulp.task('ci', gulp.series('define-ci-folder', 'build', 'ci-after-build'));
