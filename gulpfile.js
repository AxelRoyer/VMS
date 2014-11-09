var gulp = require('gulp');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon');
var jasmine = require('gulp-jasmine');

var paths = {};

paths.styles = [
	'./style/*.scss'
];

gulp.task('sass-build', function () {
	gulp.src(paths.styles)
		.pipe(sass({
			includePaths: bourbon.includePaths
		}))
		.on("error", errorAlert)
		.pipe(gulp.dest('./style'));
});

gulp.task('sass-watch', function () {
	gulp.src(paths.styles)
		.pipe(sass({
			includePaths: bourbon.includePaths
		}))
		.on("error", errorAlert)
		.pipe(gulp.dest('./style'));
	gulp.watch(paths.styles, ['sass-build'])
});

gulp.task('tests', function () {
	return gulp.src('tests/*.js')
		.pipe(jasmine());
});

gulp.task('default', ['sass-watch']);

function errorAlert (error) {
	console.log(error.message);
}
