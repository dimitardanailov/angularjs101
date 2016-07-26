import VehicleService from './Vehicle.Service';
console.log(VehicleService);

class VehicleController {

	constructor(VehicleService) {
		this.vehicles = VehicleService.getVehicles();

		console.log(this);
	}
}

VehicleController.$inject = ['VehicleService'];

export default VehicleController;
