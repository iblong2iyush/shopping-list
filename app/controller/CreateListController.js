var controllers = angular.module('Controllers', []);
controllers.controller('CreateListController', function CreateListController ($scope){

	$scope.shoppingList = {};

	$scope.shoppingList.date = new Date();
	var month = $scope.shoppingList.date.getMonth();
	var day = $scope.shoppingList.date.getDate();
	$scope.shoppingList.name = 'Shopping List from ' + day + '/' + month;
	$scope.shoppingList.items = [];
	$scope.userInput = '';

	$scope.add = function() {
		var item ={};
		item.name = getItemName();
		item.price = getItemPrice();

		$scope.shoppingList.items.push(item);

		$scope.userInput = '';
	};

	$scope.save = function() {
		
	};

	$scope.delete = function(index) {
		$scope.shoppingList.items.splice(index, 1);
	};

	$scope.ready = function(index) {
		$scope.shoppingList.items[index].ready = true
	};

	getItemName = function() {
		return $scope.userInput.split(',')[0]
	}

	getItemPrice = function() {
		return $scope.userInput.split(',')[1]
	}
});