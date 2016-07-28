import VehicleService from './Vehicle.Service';

class VehicleController {

	constructor(VehicleService) {
		this.vehicles = VehicleService.getVehicles();
	}
}

VehicleController.$inject = ['VehicleService'];

export default VehicleController;
