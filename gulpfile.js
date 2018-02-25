var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    	gulp.src("scss/main.scss")
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest("css"))
});

// Static Server
gulp.task('browser-sync', function() {

    browserSync.init(["css/*.css","js/*.js"],{
        server: {
        	baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
	gulp.watch("scss/*.scss", ['sass']);
});