var gulp = require('gulp');
var sass = require('gulp-sass');

var rutas = {
	html: './src/assets/index.html',
	registroHTML: './src/assets/registro.html',
	codigoHTML: './src/assets/ingresar-codigo.html',
	mainSass: './src/assets/scss/main.scss',
	variablesSass: './src/assets/scss/_variables.scss',
	mixinSass: './src/assets/scss/_mixin.scss',
	js: './src/assets/js/app.js',
	jsPuro: './src/assets/js/main.js',
	jsRegistro: './src/assets/js/registro.js',
	jsCodigoSeguridad: './src/assets/js/enviar-codigo.js'
};

gulp.task('html', function(){
	gulp.src(rutas.html)
		.pipe(gulp.dest('./public'))
});

gulp.task('registro', function(){
	gulp.src(rutas.registroHTML)
		.pipe(gulp.dest('./public'))
});

gulp.task('codigoHTML', function(){
	gulp.src(rutas.codigoHTML)
		.pipe(gulp.dest('./public/views'))
});


gulp.task('css', function(){
	gulp.src(rutas.mainSass)
		.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', sass.logError))
		.pipe(gulp.dest('./public/css'))
});

gulp.task('js', function(){
	gulp.src(rutas.js)
		.pipe(gulp.dest('./public/js'))
});

gulp.task('jsPuro', function(){
	gulp.src(rutas.jsPuro)
	.pipe(gulp.dest('./public/js'))
});

gulp.task('jsCodigo', function() {
	gulp.src(rutas.jsCodigoSeguridad)
	.pipe(gulp.dest('./public/js'))
});

gulp.task('jsRegistro', function() {
	gulp.src(rutas.jsRegistro)
	.pipe(gulp.dest('./public/js'))
});


gulp.task('html-watch', ['html', 'registro'], function(){
	gulp.watch(rutas.html);
	gulp.watch(rutas.registroHTML);
});

gulp.task('css-watch', ['css'], function(){
	gulp.watch(rutas.mainSass, ['css']);
});

gulp.task('js-watch', ['js', 'jsPuro', 'jsCodigo'], function(done){
	gulp.watch(rutas.js);
	gulp.watch(rutas.jsPuro);
	gulp.watch(rutas.jsCodigoSeguridad);
});



