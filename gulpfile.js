const gulp = require('gulp');
const {
  series,
  src,
  dest,
  watch
} = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');
const webp = require('gulp-webp');
const autoprefixer = require('autoprefixer');
const cssmin = require('gulp-cssmin');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const path = require('path');
const gulpif = require('gulp-if');
const del = require('del');
const cssnext = require('cssnext');

const plugins = [
  autoprefixer,
  cssnext,
];

let isDevelopment = false;

const arrStyles = ['styles', 'indexPage', 'routingCatalog', 'infoPage'];
const arrScripts = ['default', 'indexPage', 'routingCatalog'];

const webpackConfig = {
  entry: {},
  output: {
    path: path.resolve(__dirname, 'themes/prime/assets/javascript'),
    filename: '[name].js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'themes/prime/assets/src/js/module'),
      'node_modules'
    ]
  },
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'none',

  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};

arrScripts.forEach((item, i) => {
  webpackConfig.entry[item] = path.resolve(__dirname, `themes/prime/assets/src/js/${item}.js`);
});

function cssRender(name, done) {
  src('themes/prime/assets/src/less/' + name + '.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulpif(!isDevelopment, cssmin()))
    .pipe(gulpif(!isDevelopment, postcss(plugins)))
    .pipe(rename(name + '.min.css'))
    .pipe(dest('themes/prime/assets/css'));
  done();
}

function inlineRender(done) {
  src('themes/prime/assets/src/less/inline.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss(plugins))
    .pipe(rename('inline-style.htm'))
    .pipe(dest('themes/prime/partials/layout-components'));
  done();
}

function bundle(done) {
  src('themes/prime/assets/src/js/default.js')
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(dest('themes/prime/assets/javascript'));
  done();
}

function lessToCss(done) {
  arrStyles.forEach((item, i) => {
    cssRender(item, done);
  });

  inlineRender(done);
  done();
}

function watching(done) {
  watch('themes/prime/assets/src/less/inline.less', inlineRender);

  arrStyles.forEach((item, i) => {
    watch(`themes/prime/assets/src/less/${item}.less`, function(done) {
      cssRender(item, done);
      done();
    });
  });

  watch('themes/prime/assets/src/less/blocks/**/*.less', lessToCss);
  watch('themes/prime/assets/src/js/**/*.js', bundle);

  done();
}

function update(done) {
  bundle(done)
  lessToCss(done);
  done();
}


exports.default = series(watching);
exports.update = series(update);

gulp.task('webp', function() {
  return src('themes/prime/assets/images/*.{png,jpg,jpeg}')
    .pipe(webp({
      quality: 85
    }))
    .pipe(dest('themes/prime/assets/images/'));
});

gulp.task('deleteWebp', function() {
  return del(['themes/prime/assets/images/*.webp']);
});