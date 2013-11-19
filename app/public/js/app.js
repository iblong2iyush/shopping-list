'use strict';

var shoppingListApp = angular.module('shopping-list', [
		'ngRoute','Controllers', 'Directives','ShoppingListServices'
	]);

shoppingListApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/lists', {
        templateUrl: 'views/shopping-list.html',
        controller: 'ShoppingListController'
      }).
      when('/create', {
        templateUrl: 'views/shopping-details.html',
        controller: 'CreateListController'
      }).
      otherwise({
        redirectTo: '/lists'
      });
  }]);