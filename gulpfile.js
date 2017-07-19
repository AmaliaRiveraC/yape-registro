var gulp = require('gulp');
var sass = require('gulp-sass');

var rutas = {
	html: './src/assets/index.html',
	registroHTML: './src/assets/registro.html',
	mainSass: './src/assets/scss/main.scss',
	variablesSass: './src/assets/scss/_variables.scss',
	mixinSass: './src/assets/scss/_mixin.scss',
	js: './src/assets/js/app.js'
};

gulp.task('html', function(){
	gulp.src(rutas.html)
		.pipe(gulp.dest('./public'))
});

gulp.task('registro', function(){
	gulp.src(rutas.registroHTML)
		.pipe(gulp.dest('./public'))
});

gulp.task('registro', function(){
	gulp.src(rutas.registroHTML)
	.pipe(gulp.dest('./public'))
});

gulp.task('css', function(){
	gulp.src(rutas.mainSass)
		.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', sass.logError))
		.pipe(gulp.dest('./public'))
});

gulp.task('js', function(){
	gulp.src(rutas.js)
		.pipe(gulp.dest('./public'))
});

gulp.task('html-watch', ['html'], function(){
	gulp.watch(rutas.html);
});

gulp.task('css-watch', ['css'], function(){
	gulp.watch(rutas.mainSass, ['css']);
});

gulp.task('js-watch', ['js'], function(done){
	gulp.watch(rutas.js);
});



