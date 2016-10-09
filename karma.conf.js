// Karma configuration
// Generated on Fri Oct 07 2016 22:30:19 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify','jasmine'],


    // list of files / patterns to load in the browser
    files: [
		'node_modules/babel-polyfill/dist/polyfill.js',
		'src/**/*.js',
		'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'src/**/*.js': ['browserify', 'coverage'],
		"test/**/*.js": ["browserify"]
    },
	browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },
    babelPreprocessor: {
      options: {
        presets: ['es2015'], // use the es2015 preset
        sourceMap: 'inline', // inline source maps inside compiled files
		"plugins": ["transform-es2015-modules-umd"]
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 8080,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
	
	
	coverageReporter: {
		type : 'html',
		dir : 'www/coverage/'
    }
  })
}
