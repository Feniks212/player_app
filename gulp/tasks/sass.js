module.exports = function() {
  $.gulp.task('sass', function() {
      return $.gulp.src('./app/scss/style.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({
          title: 'Style'
      }))
      .pipe($.gp.autoprefixer({
          overrideBrowserslist: [
              'last 3 version',
              '> 1%',
              'ie 8',
              'ie 9',
              'Opera 12.1'
          ]
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./app'))
  });
}