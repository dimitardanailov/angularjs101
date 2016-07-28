class HelloWorldController {
	constructor($rootScope) {
		this.title = 'Hello firebase !!!';

		this.loadFirebaseData($rootScope);
	}

	loadFirebaseData($rootScope) {
		const dbRef = firebase.database().ref().child('text');
		dbRef.on('value', snap => {
			this.title = snap.val();

			console.log('Angularjs', this.title);
			console.log('Firebase', snap.val());
			// Update view 
			$rootScope.$apply();
		});
	}

	update () {
		console.log('clicked');
	}
};

HelloWorldController.$inject = ['$rootScope'];

export default HelloWorldController;
