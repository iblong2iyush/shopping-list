controllers.controller('ShoppingListController', function ShoppingListController($scope, $http){
	$http.get('domain/shoppingList.json').success(function(data) {
    	$scope.lists = data;
  	});

	/*ShoppingList.query(function(data){
		$scope.lists = data	
	});*/
	
});