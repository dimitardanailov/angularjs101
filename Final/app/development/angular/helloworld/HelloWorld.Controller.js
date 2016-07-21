class HelloWorldController {
	constructor() {
		this.title = 'Hello firebase !!!';

		this.loadFirebaseData();
	}

	loadFirebaseData() {
		const dbRef = firebase.database().ref().child('text');
		dbRef.on('value', snap => {
			this.title = snap.val();

			console.log('Angularjs', this.title);
			console.log('Firebase', snap.val());
		});
	}

	update () {
		console.log('clicked');
	}
};

HelloWorldController.$inject = [];

export default HelloWorldController;
