angular.module("app")
	.directive("autoFocus", function($timeout) {
		return {
			restrict: 'AC',
			link: function (scope, element) {
				$timeout(function () {
					element[0].focus();
				}, 0);
			}
		};
	})
	.directive("autofocusWhen", function($timeout) {
		return {
			link: function(scope, element, attributes) {
				scope.$watch(attributes.autofocusWhen, function (value) {
					if (value) {
						$timeout(function() {
							element[0].focus();
						}, 0);
					}
				});
			}	 
		};
	});
