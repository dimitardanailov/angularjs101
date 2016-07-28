import VehicleService from './Vehicle.Service';
console.log(VehicleService);

class VehicleController {

	constructor(VehicleService) {
		this.vehicles = VehicleService.getVehicles();
	}
}

VehicleController.$inject = ['VehicleService'];

export default VehicleController;
