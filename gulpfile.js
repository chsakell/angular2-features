"use strict";
var gulp = require("gulp");
var del = require("del");
var replace = require("gulp-replace");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server", "app", "assets","systemjs", "bower"], function () {
    console.log("Building resources...");
});
/* copy the app core files to the build folder */
gulp.task("app", ['index'], function(){
    return gulp.src(["src/app/**", "!src/app/**/*.ts"])
        .pipe(gulp.dest("build/app"));
});
/* get the index file to the root of the build */
gulp.task("index", function(){
    return gulp.src(["index.html"])
        .pipe(replace('node_modules', 'lib'))
        .pipe(gulp.dest("build"));
});
/* copy node server to build folder */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "src/server/**" })
        .pipe(gulp.dest("build"));
});
/* styles and other assets */
gulp.task("assets", function(){
    return gulp.src(["assets/**/*"], { "base" : "." })
        .pipe(gulp.dest("build"));
});

/* styles and other assets */
gulp.task("systemjs", function(){
    return gulp.src(["systemjs.config.js"])
        .pipe(replace('node_modules', 'lib'))
        .pipe(replace('src/app', 'app'))
        .pipe(gulp.dest("build"));
});

gulp.task("bower", function(){
    return gulp.src(["bower.json"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    var lib = "build/lib/";

    gulp.src('node_modules/' + "@angular/**/*.js",
                { base: 'node_modules/' + "@angular/" })
                .pipe(gulp.dest(lib + "@angular/"));

    gulp.src('node_modules/' + "angular2-in-memory-web-api/*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "core-js/client/shim*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

     gulp.src('node_modules/' + "zone.js/dist/zone*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "reflect-metadata/Reflect*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "systemjs/dist/*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "rxjs/**/*.js",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "bootstrap/dist/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "ngx-bootstrap/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "ng2-slim-loading-bar/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

    gulp.src('node_modules/' + "lodash/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));

     gulp.src('node_modules/' + "moment/**/*",
            { base: 'node_modules/' })
            .pipe(gulp.dest(lib));
});
/**
 * Build the project.
 */
gulp.task("default", ['resources', 'libs'], function () {
    console.log("Building the project ...");
});