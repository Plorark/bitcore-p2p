'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-kore');

bitcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
