angular.module('personal', ['ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'app/view/home.html',
		controller: 'homeCtrl'
	})
	.when('/about', {
		templateUrl: 'app/view/about.html',
		// controller: 'aboutCtrl'
	})
	.when('/portfolio', {
		templateUrl: 'app/view/portfolio.html',
		// controller: 'portfolioCtrl'
	})
	.when('/skills', {
		templateUrl: 'app/view/skills.html',
		// controller: 'skillsCtrl'
	})
	.when('/contact', {
		templateUrl: 'app/view/contact.html',
		// controller: 'contactCtrl'
	})

	.otherwise('/home')
})