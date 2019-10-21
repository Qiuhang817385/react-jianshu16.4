const { series, src, dest, watch,parallel } = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function testLess() {
    return src(['src/less/*.less', '!src/less/**/{reset,test}.less'])
        .pipe(less())
        .pipe(cssmin({ compatibility: 'ie7' }))
        .pipe(dest('src/css'));
}

function concatcss() {
    return src('src/css/*.css')
        .pipe(concat('all.css'))    //合并所有js到main.js
        .pipe(dest('build'))    //输出main.js到文件夹
}
function minifyjs() {
    return src('src/js/*.js')
        .pipe(uglify())    //压缩
        .pipe(dest('src/js/min'));  //输出
}
function concatjs() {
    return src('src/js/min/*.js')
        .pipe(concat('all.js'))    //合并所有js到main.js
        .pipe(dest('build'))    //输出main.js到文件夹
}



watch('src/less/*.less', testLess); //当所有less文件发生改变时，调用testLess任务
watch('src/css/*.css', concatcss);
watch('src/js/*.js', minifyjs);
watch('src/js/min/*.js', concatjs);


exports.default = series(parallel(testLess, concatcss),parallel( minifyjs, concatjs));