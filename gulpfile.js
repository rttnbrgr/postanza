var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

var styles = {
	src: 'styles/main.scss',
	dest: 'styles',
	watch: 'styles/**/*.scss'
}

gulp.task('styles', function() {
	return gulp.src(styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(styles.dest));
});

gulp.task('watch', function() {
	// watch sass files
	gulp.watch(styles.watch, ['styles']);
});

gulp.task('default', function() { console.log('gulp just ran'); });