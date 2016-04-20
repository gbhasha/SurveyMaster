var webpackCfg = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ 'PhantomJS' ],
    files: [
      'test/loadtests.js',
      {
        pattern: 'test/fixtures/**/*'
      }
    ],
    port: 8080,
    captureTimeout: 60000,
    frameworks: [ 'mocha', 'chai', 'fixture' ],
    client: {
      mocha: {}
    },
    singleRun: false,
    reporters: [ 'mocha', 'coverage' ],
    preprocessors: {
      'test/loadtests.js' : [ 'webpack', 'sourcemap' ],
      '**/*.html'         : [ 'html2js' ],
      '**/*.json'         : [ 'json_fixtures' ]
    },
    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text' }
      ]
    }
  });
};
