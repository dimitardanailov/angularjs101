import module from '../app.module';
import HelloWorldRouteConfiguration from './HelloWorld.Route';

angular
	.module(module + '.helloworld', [
		'ui.router'
	])
	.config(HelloWorldRouteConfiguration);
