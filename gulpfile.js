const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
})
gulp.task('watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});