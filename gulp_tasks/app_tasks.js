

// load needed plugins and modules
var loadedPluginsModule = require(process.cwd() + '/include/loadedPluginsModule');

var requireFromCwdModule = require(process.cwd() + '/include/requireFromCwdModule');


var plugins = loadedPluginsModule.plugins;
var requireFromCwd = requireFromCwdModule.requireFromCwd;

	
// Set source and dest path

global.PATH = {
	'src': {
		'less': __dirname + '/../src/less',
		'js':   __dirname + '/../src/main.js'
	},
	'dest': {
		'css': '../www/css',
		'js': '../www/js'
	}
};



// read options from console
var knownOptions = {
	string: ['env'],
	default: {
			env: process.env.NODE_ENV || 'production'
		}
};


var options = plugins.minimist(process.argv.slice(2), knownOptions);

global.ENV = options.env;


// We need to include gulp this way, otherwise he won't see symlinked file and won't be able to work
var gulp = requireFromCwd('gulp');




gulp.task('front:compile:js', require(__dirname + '/tasks/compile_js.js')(gulp, plugins));

gulp.task('front:compile:less', require(__dirname + '/tasks/compile_less.js')(gulp, plugins));



gulp.task('default', [ 'front:compile:js', 'front:compile:less']);