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
<!-
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


```html
<!-
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
