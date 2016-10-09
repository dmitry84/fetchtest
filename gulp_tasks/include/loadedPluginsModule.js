/**
 * Load needed modules
 * 
 * @type type
 */

var requireFromCwdModule = require(process.cwd() + '/include/requireFromCwdModule');

var requireFromCwd = requireFromCwdModule.requireFromCwd;



var plugins = {
	'gulp': requireFromCwd("gulp"),
	'gutil': requireFromCwd('gulp-util'),
	'gulpDebug': requireFromCwd("gulp-debug"),
	'source': requireFromCwd('vinyl-source-stream'),
	'browserify': requireFromCwd('browserify'),
	'buffer': requireFromCwd('vinyl-buffer'),
	'sourcemaps': requireFromCwd("gulp-sourcemaps"),
	'babel': requireFromCwd("gulp-babel"),
	'babelify': requireFromCwd('babelify'),

	'gulpLess': requireFromCwd('gulp-less'),
	'concat': requireFromCwd("gulp-concat"),
	'uglify': requireFromCwd("gulp-uglify"),
	//
	'LessAutoprefix': requireFromCwd('less-plugin-autoprefix'),

	'_if': requireFromCwd('gulp-if'),
	'cleanCSS': requireFromCwd('gulp-clean-css'),
	'cleanDest': requireFromCwd('gulp-clean-dest'),
	'lesshint': requireFromCwd('gulp-lesshint'),
	'minimist': requireFromCwd('minimist'),
	'watch': requireFromCwd('gulp-watch'),
	'plumber': requireFromCwd('gulp-plumber')
};


module.exports.plugins = plugins;
