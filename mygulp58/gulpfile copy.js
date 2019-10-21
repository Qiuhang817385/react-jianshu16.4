
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
     watch = require('gulp-watch');

gulp.task('watch', function () {
    w('./src/**/*.less', 'testLess'); //当所有less文件发生改变时，调用testLess任务
    w('./src/**/*.css', 'concatcss');
    function w(path, task) {
        watch(path, function () {
            gulp.start(task);
        });
    }
});

//less编译并压缩任务
gulp.task('testLess', function () {
    return gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('src/css'));
});

gulp.task('concatcss', function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build'))
});


gulp.task('default', function () {
    gulp.start(['testLess', 'concatcss', 'watch']);
});

// src()、dest()、series() 或 parallel()