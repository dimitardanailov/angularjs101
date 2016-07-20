const moduleName = 'angular-firebase-app';

angular
	.module(moduleName, [
		moduleName + '.helloworld',
		'ui.router'
	]);

export default moduleName;
