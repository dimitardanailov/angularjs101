class VehicleService {
	constructor() {
	}

	getVehicles() {
		return [
			{ 'id': 1, 'name': 'X-Wing Fighter' },
			{ 'id': 2, 'name': 'Tie Fighter' },
			{ 'id': 3, 'name': 'Y-Wing Fighter' }
		]
	}
}

VehicleService.$inject = [];

export default VehicleService;
