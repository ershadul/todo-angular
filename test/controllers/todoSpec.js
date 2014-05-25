describe('Unit: TodoController', function() {
 	// Load the module with TodoController
  	beforeEach(module('todoApp'));

  	var ctrl, scope;
  	// inject the $controller and $rootScope services
  	// in the beforeEach block
  	beforeEach(inject(function($controller, $rootScope) {
    	// Create a new scope that's a child of the $rootScope
    	scope = $rootScope.$new();
    	// Create the controller
    	ctrl = $controller('TodoController', {
      		$scope: scope
    	});
  	}));

  	it('should initialize scope.name as "NewsCred"', function() {
    	expect(scope.name).toEqual("NewsCred");
  	});

});