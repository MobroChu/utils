const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('min', function () {
  gulp.src('src/**/*.js')
  .pipe(minify({
    ext: {
      src:'-debug.js',
      min: '.min.js'
    },
    noSource: true  // 不需要输出原来src的文件
  }))
  .pipe(gulp.dest('dist/'))
})