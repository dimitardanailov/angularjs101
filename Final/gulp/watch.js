import gulp from 'gulp';
import gutil from 'gulp-util';

// Tracking files changes
import watch from 'gulp-watch';

// Load Javascript Configurations
import js from './configurations/javascript'

/**
 * Watch Files For Changes
 */
gulp.task('watch', () => {
	// ** - If a "globstar" is alone in a path portion, 
	// then it matches zero or more directories and subdirectories searching for matches. 
	// It does not crawl symlinked directories.
	// Documentation: https://github.com/isaacs/node-glob
	const trackingFiles = js.configuration.folderStructure.baseDevelopment + '/**';

	gulp.watch(trackingFiles, ['copy-index-html', 'browserify-transform']);
});
