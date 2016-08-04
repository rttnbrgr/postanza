var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var surge = require('gulp-surge');
var shell = require('gulp-shell');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var cssnano = require('cssnano');

// var styles = {
// 	src: 'styles/main.scss',
// 	dest: 'styles',
// 	watch: 'styles/**/*.scss'
// }

var src = {
	styles: 'app/styles/main.scss',
	watch: 'app/styles/**/*.scss',
	post: 'dist/styles/main.css'
}

var dest = {
	styles: 'dist/styles',
	public: 'dist',
	surge: 'nathan-needs-uh-yahb.surge.sh'
}

// compile sass
gulp.task('styles', function() {
	return gulp.src(src.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(dest.styles));
});

// watch for sass changes; not playing nice w/ webpack right now
gulp.task('watch', function() {
	gulp.watch(src.watch, ['styles']);
});

// run watch and the webpack-dev-server
gulp.task('default', ['watch', 'dev'], function() { 
	console.log('gulp just ran'); 
});

// postcss hotness
gulp.task('postcss', ['styles'], function() {
	var plugins = [
		autoprefixer({ browsers: ['last 2 versions'] }),
		cssnext,
		cssnano
	];
	return gulp.src(src.post)
		.pipe(postcss(plugins))
		.pipe(gulp.dest(dest.styles))	
});

gulp.task('test', function() { 
	console.log(src.post) 
});

// WEBPACK STUFF
gulp.task('dev', shell.task('npm run start'))
gulp.task('production', shell.task('npm run production'));

// DEPLOY
gulp.task('deploy', ['postcss'], function() {
	return surge({
    project: dest.public,  // Path to your static build directory
    domain:  dest.surge    // Your domain or Surge subdomain
  })
});

