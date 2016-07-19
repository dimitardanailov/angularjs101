const moduleName = 'angular-firebase-app';

angular
	.module(moduleName, [
		moduleName + '.firebase.helloworld',
		'ui.router'
	])
	.config(configure);

export default moduleName;
