const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
    return gulp.src('resources/css/*.css')
               .pipe(cleanCSS())
               .pipe(gulp.dest('public/css'));
}

exports.default = gulp.series(minifyCSS);