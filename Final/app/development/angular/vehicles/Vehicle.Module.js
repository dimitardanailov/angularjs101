import module from '../app.module';
import VehicleRouteConfiguration from './Vehicle.Route';
import VehicleService from './Vehicle.Service';

angular
	.module(module + '.vehicles', [
		'ui.router'
	])
	.config(VehicleRouteConfiguration);

// Add service to angular registry
angular
	.module(module + '.vehicles')
	.service('VehicleService', VehicleService);
