controllers.controller('ShoppingListController', function ShoppingListController($scope, $http){

	$http.get('/shoppingList').success(function(data) {
    	$scope.lists = data;
  	});

	$scope.edit = function(id) {
		var url = '/shoppingList/' + id;
		
		$http.get(url).success(function(data) {
    		console.log(data)
  		});		
	};

	$scope.delete = function() {
		
	};

	$scope.done = function() {
		
	};

	
});