'use strict';

//...... Load all of our dependencies ......

var gulp 					=  require('gulp')
	 ,plumber				=  require('gulp-plumber')
	 ,stylus 				=  require('gulp-stylus')
	 ,koutoSwiss		=  require('kouto-swiss')
	 ,jeet					=  require('jeet')
	 ,rupture				=  require('rupture')
	 ,uglify 				=  require('gulp-uglify')
	 ,concat 				=  require('gulp-concat')
	 ,imagemin   		=  require('gulp-imagemin')
	 ,browserSync 	=  require('browser-sync')
	 ,concatCss 		=  require('gulp-concat-css')
	 ,prefixer			=  require('autoprefixer-stylus')
	 ,minHtml 			=  require('gulp-minify-html')
	 ,minifyCss 		=  require('gulp-minify-css')
	 ,deploy				=  require('gulp-gh-pages');


//...... Launch the Server and reload browsers ......

gulp.task('browser-sync', function () {
   var files = [
       'app/**/*.html'
      ,'app/src/css/**/*.css'
      ,'app/src/img/**/*'
      ,'app/src/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: 'build/'
      }
   });
});


//...... Imagemin Task - compressing images ......

gulp.task('imagemin', function() {
	return gulp.src('app/src/img/**/*')
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('build/img'));
});



gulp.task('scripts', function(){
	gulp.src('app/src/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('build/js'))
});

gulp.task('stylus', function(){
		gulp.src('app/src/styl/main.styl')
		.pipe(plumber())
		.pipe(stylus({
			use:[koutoSwiss(), prefixer(), jeet(),rupture()],
			compress: true
		}))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('build/css'))
});



gulp.task('css', function(){
	gulp.src('app/src/css/*.css')
	.pipe(minifyCss())
	.pipe(concatCss('plugins.min.css'))
	.pipe(gulp.dest('build/css'))
});

gulp.task('html', function () {
  gulp.src('app/**/*.html')
  	///.pipe(minHtml())
	.pipe(gulp.dest('build/'))
});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.html'], ['html']);
  gulp.watch('app/src/js/*.js', ['scripts']);
  gulp.watch('app/src/css/*.css', ['css']);
  gulp.watch('app/src/styl/*.styl', ['stylus']);
  //gulp.watch('app/src/fonts/**/*', ['fonts']);
});

// just run gulp deploy-pages to send build files to gh-pages
//gulp.task('deploy-pages', function () {
  //return gulp.src("build/**/*")
    //.pipe(deploy());
//});

// Olhar na documentação como usar o módulo deploy-pages

gulp.task('default', ['stylus', 'fonts','watch', 'imagemin', 'scripts', 'css', 'html', 'browser-sync']);
