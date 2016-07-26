import VehicleController from './Vehicle.Controller';

/**
 * @ngdoc function
 * @description
 */
function VehicleRouteConfiguration($stateProvider) {
	$stateProvider
		// Using a '.' within a state name declares a child within a parent.
		// So you have a new state 'homepage' within the parent 'app' state.
		.state('vehicles', {
			'url': '/vehicles',
			'templateUrl': 'app/development/angular/vehicles/views/list.html',
			'controller': VehicleController,
			'controllerAs': 'vm'
		});
}

VehicleRouteConfiguration.$inject = ['$stateProvider'];

export default VehicleRouteConfiguration;
