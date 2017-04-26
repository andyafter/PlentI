var gulp  = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function () {
    console.log("Cleaning Build Directory");
    return gulp.src('build/*', {read: false})
        .pipe(clean());
});
