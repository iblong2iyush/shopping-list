var controllers = angular.module('Controllers', []);
controllers.controller('CreateListController', function CreateListController ($scope, $routeParams, $http){
	
	//FIXME: there's a call to init at the end of the controller, init is being triggered twitce. 
	$scope.init = function() {
		debugger
		if ($routeParams.shoppingListId) {
			var url = '/shoppingList/' + $routeParams.shoppingListId;
		
			$http.get(url).success(function(data) {
	    		$scope.shoppingList = data;
	  		});	

		} else {
			$scope.resetData();
		}
	};

	$scope.add = function() {
		var item ={};
		item.name = getItemName();
		item.price = getItemPrice();

		$scope.shoppingList.items.push(item);

		$scope.userInput = '';
	};

	$scope.delete = function(index) {
		$scope.shoppingList.items.splice(index, 1);
	};

	$scope.ready = function(index) {
		$scope.shoppingList.items[index].ready = true
	};

	$scope.save = function() {
		$http.post('/add', $scope.shoppingList).
		success(
			function(data, status, headers, config){
				console.log(data);
				$scope.resetData();
		}).
		error(
			function(data, status, headers, config) {
				console.log('errr' + data)
			}
		);
	};

	$scope.resetData = function(){
		$scope.shoppingList = {};
		$scope.shoppingList.date = new Date();

		var month = $scope.shoppingList.date.getMonth();
		var day = $scope.shoppingList.date.getDate();

		$scope.shoppingList.name = 'Shopping List from ' + day + '/' + month;
		$scope.shoppingList.items = [];
		$scope.userInput = '';
	}

	getItemName = function() {
		return $scope.userInput.split(',')[0]
	}

	getItemPrice = function() {
		return $scope.userInput.split(',')[1]
	}

	$scope.init();
});