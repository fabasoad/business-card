var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var pug = require('gulp-pug');
var del = require('del');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var babel = require('gulp-babel');




gulp.task('watch',['pug','sass','js','assets'], function(){
    gulp.watch(['src/scss/*.scss','src/scss/**/*.scss'],['sass']);
    gulp.watch(['src/pug/*.pug','src/pug/components/*.pug'],['pug']);
    gulp.watch(['src/assets/**/*'],['assets']);
    gulp.watch(['src/js/*'],['js']);
});

gulp.task('pug',function(){
    return  gulp.src('src/pug/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .on('error', gutil.log)
        .pipe(gulp.dest('dist'))
})

gulp.task('js',function(){
    return  gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(babel({presets: ['env']}))
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/assets/js'))
})

gulp.task('sass',function(){
    return gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .on('error', gutil.log)
        .pipe(gulp.dest('dist/assets/css'));
})

gulp.task('assets',function(){
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets'));
})

gulp.task('clean', function() {
    return del.sync('dist');
})

gulp.task('cssvendor',function() {
    return gulp.src('src/scss/vendor/**/*')
        .pipe(gulp.dest('dist/assets/css/vendor'));
})

gulp.task('default', function(){
    runSequence('clean', 'assets', 'cssvendor' ,['pug','sass','js'],'watch')
})