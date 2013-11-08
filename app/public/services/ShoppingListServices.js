var shoppingListServices = angular.module('ShoppingListServices', ['ngResource']);

shoppingListServices.factory('ShoppingList', ['$resource',
  function($resource){
    return $resource('domain/shoppingList.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);