(function(){
	
	var loginApp = angular.module("loginApp", []);
		
	loginApp.controller("controller", ["$scope", function($scope){
		$scope.username = "";
		$scope.password = "";
		$scope.functionLog = function(){
		  console.log($scope.username, $scope.password);
		  if($scope.username == "Thibault" && $scope.password == "Dasson_95"){
			redirect();
		  } else {
			alert("Connexion échouée");
		  }
		}
	}]);
			
	function redirect(){
		window.location = "html/home.html";
	}
	
})();