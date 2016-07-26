const moduleName = 'angular-firebase-app';

angular
	.module(moduleName, [
		moduleName + '.helloworld',
		moduleName + '.vehicles',
		'ui.router'
	]);

export default moduleName;
