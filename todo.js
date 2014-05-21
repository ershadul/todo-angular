function TodoController($scope) {
	$scope.name = 'NewsCred';

	$scope.todos = [];

	$scope.add = function ($event) {
		if ($event.keyCode === 13 && $scope.name.trim()) {
			$scope.todos.push(
				{ name: $scope.name }
			);
			$scope.name = '';
		}
	};

	$scope.remove = function ($index) {
		$scope.todos.splice($index, 1);
	};

	$scope.edit = function (todo) {
		todo.editMode = true;
	};

	$scope.done = function (todo) {
		todo.editMode = false;
	};
}