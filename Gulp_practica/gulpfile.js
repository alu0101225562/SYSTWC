const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const { argv } = require('yargs');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const maps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

const $ = gulpLoadPlugins();

const port = argv.port || 9000;

function minifyCSS() {
  return src(['app/styles/css1.css', 'app/styles/css2.css'])
    .pipe(concat('styles.css'))
    .pipe(dest('app/dest'));
}

function optimizeCSS() {
  return src('app/dest/styles.css')
    .pipe(cleanCss())
    .pipe(dest('app/dest/minifiedStyles.css'));
}

function generateMaps() {
  return src('app/styles/*.css')
    .pipe(maps.init())
    .pipe(dest('app/styles/maps'));
}

function generateImageMin() {
  return src('app/apple-touch-icon.png')
    .pipe(imagemin())
    .pipe(dest('dest/images'));
}

function minifyJS() {
  return src('app/scripts/test.js')
    .pipe($.uglify({ compress: { drop_console: true } }))
    .pipe(dest('dest/jss'));
}

exports.minifyCSS = minifyCSS;
exports.optimizeCSS = optimizeCSS;
exports.generateMaps = generateMaps;
exports.generateImageMin = generateImageMin;
exports.minifyJS = minifyJS;
