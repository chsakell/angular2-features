var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
//var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');

gulp.task('clean', function () {
    return del([config.compiledTs, config.sourceMaps]);
});

gulp.task('tslint', function () {
    return gulp.src(config.tsFiles)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});
