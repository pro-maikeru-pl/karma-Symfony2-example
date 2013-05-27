basePath = '../../';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/Resources/public/js/require-config.js', // important that this config included before REQUIRE
  REQUIRE,
  REQUIRE_ADAPTER,
  {pattern: 'app/Resources/public/js/**/*.js', included: false},
  {pattern: 'src/**/*Bundle/Resources/**/*.js', included: false},
  {pattern: 'src/**/*Bundle/Tests/Resources/**/*.js', included: false},
  'app/config/karma.runner.js'
];

preprocessors = {
    'src/**/*Bundle/Resources/**/*.js': 'coverage'
};

exclude = [];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
