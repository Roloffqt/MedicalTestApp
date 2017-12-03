var miniSmartTrial = angular.module('miniSmartTrial', ['ngRoute', 'ngAnimate']);


miniSmartTrial.factory("getdata", ['$http',function($http){  
    var getdata = {};
    
    getdata.fetchUserDetails = function(){ 
        return $http.get('data/data.json');
    }
 return getdata;


}]);

miniSmartTrial.filter('capitalizeWord', function() {
    return function(text) {
      return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
    }
});

miniSmartTrial.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/list', {
		templateUrl: "views/list.html",
		Controller: 'listController',	
	}).when('/create', {
		templateUrl: "views/create.html",
		Controller: 'listController',	
	}).when('/details/:id', {
		templateUrl: "views/study.html",
		Controller: 'detailController',	
	}).otherwise({
		redirectTo: '/list'
	});
}]);

