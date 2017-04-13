
			var app = angular.module("loginApp", ["ngRoute"]);
app.config(function($routeProvider) {
			$routeProvider
			
            .when('/login', {
               templateUrl: 'login.html',
               controller: 'loginController'
            })
			.when('/signup', {
               templateUrl: 'signup.html',
               controller: 'signupController'
            })
			.otherwise({redirectTo: '/login'})
         });
         
         app.controller('loginController', function($scope) {
			
            
         });
         
         app.controller('signupController', function($scope) {
           
         });
			
      