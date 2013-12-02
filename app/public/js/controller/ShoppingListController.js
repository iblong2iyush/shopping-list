controllers.controller('ShoppingListController', function ShoppingListController($scope, $http){
debugger
	$http.get('/list').success(function(data) {
    	$scope.lists = data;
  	});

	/*ShoppingList.query(function(data){
		$scope.lists = data	
	});*/
	
});