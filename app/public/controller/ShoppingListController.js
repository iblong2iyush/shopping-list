controllers.controller('ShoppingListController', function ShoppingListController($scope, ShoppingList){

	/*$scope.lists = [{
		name: 'Test Shopping List',
		date: '03/11/2013',
		items: [
			{
				item: {
					name: 'Coriander',
					unit: 'bunch'
				},
				price: null,
				qty: '1',
				ready: false
			},
			{
				item: {
					name: 'Lime',
					unit: 'units'
				},
				price: null,
				qty: '8',
				ready: false
			}
		]
	}];*/

	$scope.lists = ShoppingList.query();
	
});