var gulp = require('gulp');
var louis = require('gulp-louis');
 
gulp.task('louis', function() {
  louis({
    timeout: 60,
    viewport: '700x450',
    engine: 'webkit',
    userAgent: 'Chrome/37.0.2062.120',
    noExternals: false,
    performanceBudget: {
      requests: 10,
      medianLatency: 20,
      slowestResponse: 1000
    }
  });
});
 
gulp.task('default', ['louis']);