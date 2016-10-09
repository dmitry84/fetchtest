module.exports = function (gulp, plugins) {

	return function () {

		return plugins.browserify({entries: global.PATH.src.js, extensions: ['.js'], debug: true})
				.transform(plugins.babelify, {presets: ['es2015']})
				.bundle()
				.on('error', function (e) {
					plugins.gutil.log(e);
				})
				.pipe(plugins.source('bundle.js'))
				.pipe(plugins.buffer())
				
				.pipe(plugins.sourcemaps.init({loadMaps: true}))
				
				.pipe(plugins.uglify())
					.on('error', plugins.gutil.log)
				
				.pipe(plugins.sourcemaps.write('./'))

				.pipe(gulp.dest(global.PATH.dest.js));
		
	};
};

