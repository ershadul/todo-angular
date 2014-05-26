var todoAppThirdParty = angular.module('todoApp.thirdParty', ['truncate']);
var todoAppFilters = angular.module('todoApp.filters', []);
var todoAppDirectives = angular.module('todoApp.directives', []);

var todoApp = angular.module('todoApp', ['todoApp.thirdParty', 'todoApp.filters', 'todoApp.directives']);

todoAppFilters.filter('PrettyFy', function () {
	return function(input, brace) {
		if (!input) { return ''; }
		if (typeof input !== 'string') { return input; }
		if (brace) {
			input = '<<' + input + '>>';
		} else {
			input = 'OXOX' + input + 'XOXO';			
		}
    return input;
  };
});

todoAppDirectives.directive('comment', function() {
  return {
  	restrict: 'AE',
  	replace: true,
  	scope: {element: '=element'},
  	templateUrl: 'dfm.html'
  };
});

todoApp.controller('TodoController', function ($scope) {
	$scope.name = 'NewsCred';

	$scope.todos = [];

	$scope.add = function ($event) {
		if ($event.keyCode === 13 && $scope.name.trim()) {
			$scope.todos = _addToTodos($scope.todos, $scope.name);
			$scope.name = '';
		}
	};

	function _addToTodos(todos, name) {
		todos.push({ name: name });
		return todos;
	}

	$scope.remove = function ($index) {
		$scope.todos.splice($index, 1);
	};

	$scope.edit = function (todo) {
		todo.editMode = true;
		todo.tempName = todo.name;
	};

	$scope.done = function (todo, $event) {
		if ($event.keyCode === 27) { 
			todo.editMode = false; 
		} else if ($event.keyCode === 13) {
			todo.editMode = false;
			todo.name = todo.tempName;
		}
	};
});