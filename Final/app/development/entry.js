// Angularjs 
require('angular');

// Angular Modules
require('angular-resource');

// External Libraries
require('angular-ui-router');

// Angularjs 
require('./angular/app.module.js');

// Routes
require('./angular/routes/Configuration.js');
require('./angular/routes/app.route.js');

// Hello world
require('./angular/helloworld/HelloWorld.Controller.js');
require('./angular/helloworld/HelloWorld.Route.js');
require('./angular/helloworld/HelloWorld.Module.js');

// Vehicles
require('./angular/vehicles/Vehicle.Service.js');
require('./angular/vehicles/Vehicle.Controller.js');
require('./angular/vehicles/Vehicle.Route.js');
require('./angular/vehicles/Vehicle.Module.js');
