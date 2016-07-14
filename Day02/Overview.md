# MentorMate Angularjs 101 - Day 01

### Modules

> “The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application” - Justin Meyer Author JavaScriptMVC

```html
<body ng-controller="StoryController as vm">
	<h3>{{ vm.story.name }}</h3>
	<h3 ng-bind="vm.story.name"></h3>
</body>
```

```javascript
angular
  .module('app')
  .controller('VehiclesController', VehiclesController);

VehiclesController.$inject = ['VehiclesService']; // Injection
function VehiclesController(VehiclesService) { // Injection
  var vm = this;
  vm.tile = 'Services';
  vm.vehicles = VehiclesService.getVehicles();
}
```

[Demo](https://plnkr.co/edit/FbJSgeTjk3F1MQCqsqLe?p=info)

### Angular directives

```html
<!--
  Angular 1
-->
<div ng-style="vm.story ? { visibility : 'visible'} : {'visibility: 'hidden'}">
	<div>
		<img ng-src="{{vm.imagePath}}" />
	</div>
	<div>
		<a ng-href="{{vm.link}}">
		{{vm.story}}
		</a>
	</div>
</div>
```

```html
<!--
  Angular 2 Template Concepts Remove 40+ Angular 1 Built-In Directives
-->
<div [style.visibility] = "story ? 'visible' : 'hidden'>
	<div>
		<img [src]="imagePath" />
	</div>
	<div>
		<a [href]="link">{{story}}</a>
	</div>
</div>
```

[Demo](https://plnkr.co/edit/6XGV9L8TCSlIy6M8rgUW?p=preview)

### List (ng-repeat)

```html
<ul>
	<li ng-repeat="vehicle in vm.vehicles">
		{{vehicle.name}}
	</li>
</ul>
```

[Demo](https://plnkr.co/edit/qJlYKRXnnWds5b01CLc1?p=preview)

### Select

```html
<select ng-options="vehicle as vehicles.name for vehicle in vm.vehicles track by vehicle.id" 
	ng-change="vm.change()"
	ng-model="vm.selectedVehicle"></select>
```

[Demo](https://plnkr.co/edit/f30KUWaL5MDfVzvQg8H5?p=preview)

### Services, Factories

 - [Services](https://docs.angularjs.org/guide/services)
 - [AngularJS: Service vs provider vs factory](http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory)
 - [What is the difference between module.factory and module.service and how might both be applied?](https://groups.google.com/forum/#!msg/angular/56sdORWEoqg/HuZsOsMvKv4J)

```html
<body ng-controller="StoryController as vm">
	<h3>{{ vm.story.name }}</h3>
	<h3 ng-bind="vm.story.name"></h3>
</body>
```

```javascript
angular
  .module('app')
  .controller('VehiclesController', VehiclesController);

VehiclesController.$inject = ['VehiclesService']; // Injection
function VehiclesController(VehiclesService) { // Injection
  var vm = this;
  vm.tile = 'Services';
  vm.vehicles = VehiclesService.getVehicles();
}
```

```javascript
angular
  .module('app')
  .controller('VehicleService', VehicleService);

function VehicleService() {
	this.getVehicles = function() {
		return [
			{ 'id': 1, 'name': 'X-Wing Fighter' },
			{ 'id': 2, 'name': 'Tie Fighter' },
			{ 'id': 3, 'name': 'Y-Wing Fighter' }
		]
	}
}
```

[Demo](https://plnkr.co/edit/wutgIQPFcj4ucPR3Rbns?p=preview)

### Directives

[Documentation](https://docs.angularjs.org/guide/directive)

```html
<tab></tab>
```

```javascript
angular.module('app', []);

angular
	.module('app')
	.config(configure);

configure.$inject = [];

angular
	.module('app')
	.run(runBlock);

runBlock.$inject = [];
```

```javascript
angular
	.module('app')
	.directive('tab', tab);

tab.$inject = [];

function tab() {
	return {
		restrict: 'E', // only matches element name,
		templateUrl: 'tab.html',
		controller: 'TabController',
		controllerAs: 'ctrl',

		// Angular 1.3 introduces a new property to the directive definition object 
		// called bindToController, which does exactly what it says. 
		// When set to true in a directive with isolated scope that uses controllerAs, 
		// the component’s properties are bound to the controller rather than to the scope.

		// In version 1.4, bindToController gets even more powerful. 
		// When having an isolated scope with properties to be bound to a controller, 
		// we always define those properties on the scope definition and bindToController is set to true. 
		// In 1.4 however, we can move all our property binding definitions to bindToController and make it an object literal.

		// source: http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html
		bindToController: true
	}
}
```

```javascript
angular
	.module('app')
	.controller('TabController', TabController);

TabController.$inject = [];

function TabController() {
	var ctrl = this;
	ctrl.subTabs = [
		{ 'id': 1, 'name': 'Sub Tab 1' },
		{ 'id': 2, 'name': 'Sub Tab 2' },
		{ 'id': 3, 'name': 'Sub Tab 3' },
		{ 'id': 4, 'name': 'Sub Tab 4' },
		{ 'id': 5, 'name': 'Sub Tab 5' }
	}
}
```

[Demo](https://plnkr.co/edit/yVsK3uAI6yx9Md4xa0s2?p=preview)

### Filters

### Components

[Documentation](https://docs.angularjs.org/guide/component)

```javascript
```
