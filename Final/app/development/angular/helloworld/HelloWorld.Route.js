import HelloWorldController from './HelloWorld.Controller';

/**
 * @ngdoc function
 * @description
 */
function HelloWorldRouteConfiguration($stateProvider) {
	$stateProvider
		// Using a '.' within a state name declares a child within a parent.
		// So you have a new state 'homepage' within the parent 'app' state.
		.state('firebase.helloworld', {
			'url': '/',
			'templateUrl': 'app/development/angular/helloworld/views/helloworld.html',
			'controller': HelloWorldController,
			'controllerAs': 'vm'
		});
}

HelloWorldRouteConfiguration.$inject = ['$stateProvider'];

export default HelloWorldRouteConfiguration;
