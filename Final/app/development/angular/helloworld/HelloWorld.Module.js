import module from 'angular/app.module';
import HelloWorldRouteConfiguration from 'HelloWorld.Route.js';

angular
	.module(module + '.helloworld', [
		'ui.router'
	])
	.config(HelloWorldRouteConfiguration);
