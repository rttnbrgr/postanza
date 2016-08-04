var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var surge = require('gulp-surge');
var shell = require('gulp-shell');

var styles = {
	src: 'styles/main.scss',
	dest: 'styles',
	watch: 'styles/**/*.scss'
}

var src = {
	styles: 'app/styles/main.scss',
	watch: 'app/styles/**/*.scss'
}

var dest = {
	styles: 'dist/styles',
	public: 'dist',
	surge: 'nathan-needs-a-yahb.surge.sh'
}

gulp.task('styles', function() {
	return gulp.src(src.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dest.styles));
});

gulp.task('watch', function() {
	// watch sass files
	gulp.watch(src.watch, ['styles']);
});


gulp.task('default', ['dev'], function() { 
	console.log('gulp just ran'); 
});



// WEBPACK STUFF
gulp.task('dev', shell.task('npm run start'))
gulp.task('production', shell.task('npm list -depth=0'));

// DEPLOY
gulp.task('deploy', function() {});