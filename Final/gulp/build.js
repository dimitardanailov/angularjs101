import gulp from 'gulp';

// Babel
import babel from 'gulp-babel';

// Cleaning filesystem
import del from 'del';

// Contact and ordering
import runSequence from 'run-sequence';

// Minification Javascript and Browserify
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';

// Minification CSS
import minifyCss from 'gulp-minify-css';

// Load Javascript Configurations
import js from './configurations/javascript';
// console.log(js);

/**
 * Task will delete application production files.
 */
gulp.task('contact:clear-main-files', () => {
	const javascriptMainFile = `${js.configuration.folderStructure.baseProduction}/${js.configuration.concatenationLocations.mainfile}`;
	const sourceMap = javascriptMainFile + '.map';

	del([
		javascriptMainFile,
		sourceMap
	]);
});

gulp.task('browserify-transform', ['contact:clear-main-files'], () => {
	return GulpHelper.browserifyTransform(false);
});

/**
 * Minify application styling file.
 * This task will be used only in production.
 */
gulp.task('minify:styles', () => {
});

/**
 * Minify application javascript file.
 * This task will be used only in production.
 */
gulp.task('minify:javascript', ['contact:clear-main-files'], () => {
	return GulpHelper.browserifyTransform(true);
});

gulp.task('minify', (callback) => {
	runSequence(['minify:javascript', 'minify:styles'], callback);
});

gulp.task('copy-views', () => {
	// Target 
	const htmlFiles = '**/views/*.html';
	const targetFolder = `${js.configuration.folderStructure.angular.base}/${htmlFiles}`;
	// Destination
	const destination = js.configuration.folderStructure.angular.base.replace('.', './public');
	console.log('Target folder', targetFolder);
	console.log('Destination folder', destination);

	gulp.src(targetFolder).pipe(gulp.dest(destination));
});

gulp.task('copy-index-html', ['copy-views'], () => {
	gulp.src('./index.html').pipe(gulp.dest('./public'));
});

class GulpHelper {
	/**
   * Browserify has become an important and indispensable tool but requires being wrapped before working well with gulp.
   * Below is a simple recipe for using Browserify with transforms.
	 * See also: the Combining Streams to Handle Errors recipe for handling errors with browserify or uglify in your stream.
	 * 
	 * Source: https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-transforms.md
   */
	static browserifyTransform(uglifyIsEnable) {
		// set up the browserify instance on a task basis
		const browserifyStream = browserify({
			'entries': `${js.configuration.folderStructure.baseDevelopment}/entry.js`,

			// When opts.debug is true, add a source map inline to the end of the bundle. 
			// This makes debugging easier because you can see all the original files if you are in a modern enough browser.
			'debug': (uglifyIsEnable ? false : true),

			// opts.paths is an array of directories that browserify searches when looking for 
			// modules which are not referenced using relative path. Can be absolute or relative to basedir. 
			// Equivalent of setting NODE_PATH environmental variable when calling browserify command.
			// Get idea from: https://github.com/vigetlabs/gulp-starter/issues/17
			paths: [
				'../node_modules',
				'../bower_components',
				'../app/development/'
			],

			// defining transforms here will avoid crashing your stream
			'transform': [babelify]
		});

		const tempConfiguration = browserifyStream.bundle()
			.pipe(source(js.configuration.concatenationLocations.mainfile))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))

		if (uglifyIsEnable) {
			tempConfiguration
				// Add transformation tasks to the pipeline here.
				.pipe(uglify())
		}

		return tempConfiguration
			.pipe(sourcemaps.write('/', { addComment: false }))
			.pipe(gulp.dest(js.configuration.folderStructure.baseProduction));
	}
}
