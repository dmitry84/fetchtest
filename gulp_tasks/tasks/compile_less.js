module.exports = function (gulp, plugins) {

	return function () {


		var onError = function (err) {
			console.log(err);
			this.emit('end');
		};

		var autoprefix = new plugins.LessAutoprefix({browsers: ['last 2 versions', 'ie >= 9']});

		return gulp.src(PATH.src.less + '/**/*.less')
				.pipe(plugins.plumber({
					errorHandler: onError
				}))

				.pipe(plugins._if(ENV !== 'production', plugins.sourcemaps.init()))

				.pipe(plugins.lesshint({
					// Options 
				}))

				.pipe(plugins.lesshint.reporter())
				.pipe(plugins.gulpLess({
					plugins: [autoprefix]
				}))
				.pipe(plugins.cleanCSS({debug: true}, function (details) {
					console.log("Compression results:");
					console.log('Original: ' + details.name + ': ' + details.stats.originalSize);
					console.log('Compressed: ' + details.name + ': ' + details.stats.minifiedSize);
				}))

				.pipe(plugins.cleanDest(PATH.dest.css))

				.pipe(plugins._if(ENV !== 'production', plugins.sourcemaps.write('./')))

				.pipe(gulp.dest(PATH.dest.css));

	};
};


