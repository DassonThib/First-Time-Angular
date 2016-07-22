(function(){
	
	var app = angular.module("LoginApp", []);
		
	app.controller("controller", ["$scope",function($scope){
		$scope.username = "";
		$scope.password = "";
		$scope.functionLog = function(){
		  console.log($scope.username, $scope.password);
		}
	}]);
	
})();