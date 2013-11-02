var controllers = angular.module('Controllers', []);

controllers.controller('ShoppListController', function ShoppListControler ($scope){
	var list = [];

	list.push({name: 'Apple', price: '3'});
	list.push({name: 'Orange', price: '3'});

	$scope.list = list;
	$scope.newItem = {name:'', price:''};

	$scope.add = function() {
		var item ={};
		item.name = $scope.newItem.name;
		item.price = $scope.newItem.price;

		$scope.list.push(item);

		$scope.newItem = {name:'', price:''};
	};

	$scope.save = function() {
		
	}
});