var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {};

paths.styles = [
	'./style/*.scss'
];

require('web-component-tester').gulp.init(gulp);

gulp.task('sass-build', function () {
	gulp.src(paths.styles)
		.on("error", errorAlert)
		.pipe(gulp.dest('./style'));
});

gulp.task('sass-watch', function () {
	gulp.src(paths.styles)
		.on("error", errorAlert)
		.pipe(gulp.dest('./style'));
	gulp.watch(paths.styles, ['sass-build'])
});

gulp.task('default', ['sass-watch']);

function errorAlert (error) {
	console.log(error.message);
}
