var gulp  = require('gulp');
var runSequence = require('run-sequence');  
var del = require('del');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;  
var sourcemaps = require('gulp-sourcemaps');
var config = require('./gulp.config')();
var tscConfig = require('./tsconfig.json');

gulp.task('clean', function () {
    return del(['dist']);
});

var typingFiles = [  
  'typings/browser.d.ts'
];

gulp.task('serve', ['build'], function () {
    browserSync.init(config.browserSync.dev);
    //gulp.watch([config.sass.watch], ['sass']);
    gulp.watch(['angular/src/app/**/*'], ['compile', 'copy:assets']).on('change', reload);
    gulp.watch(['angular/src/index.html'], ['copy:index']).on('change', reload);
});

gulp.task('copy:assets', function () {
    return gulp.src(['angular/src/app/**/*', '!angular/src/app/**/*.ts'], {base: './'})
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:index', function () {
    return gulp.src(['angular/src/index.html',
                     'angular/src/systemjs.config.js',
                     'angular/src/main.js'])
        .pipe(gulp.dest('dist'));
});

/// copy dependencies
gulp.task('copy:libs', function () {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/zone.js/dist/**',
        'node_modules/reflect-metadata/temp/Reflect.js',
        'node_modules/rxjs/**',
        'node_modules/core-js/**',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/@angular/**'
    ], {base: './node_modules'})
        .pipe(gulp.dest('dist/libs'));
});

var typingFiles = [  
    'typings/browser.d.ts'
];

// TypeScript compile
gulp.task('compile', function () {
    var tsResult = gulp.src('angular/src/app/**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(ts(tscConfig.compilerOptions));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('build', function(cb) {
    runSequence('clean', ['compile', 'copy:libs','copy:assets', 'copy:index'], cb);
});

gulp.task('default', ['build']);
