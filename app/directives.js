angular.module('personal')

.directive('navbar', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/view/navBar.html'
	}
})

.directive('hover', function () {
	return {
		restrict: 'A',
		scope: {
			addClass: '@',
			removeClass: '@'
		},
		link: function (scope, elem, attrs) {
			elem.on('mouseover', function () {
				elem.addClass(scope.addClass)
			})
			elem.on('mouseout', function () {
				elem.removeClass(scope.addClass)
			})
		}
	}
})