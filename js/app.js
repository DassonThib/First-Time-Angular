(function(){
	
	var app = angular.module("App", []);
		
	app.controller("controller", ["$scope",function($scope){
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
	
	app.controller("menuController", ["$scope", function($scope){
		$scope.medecins = function(){
			loadPartial("medecins");
		}
		$scope.hopitaux = function(){
			loadPartial("hopitaux");
		}
		$scope.contrats = function(){
			loadPartial("contrats");
		}
		$scope.planning = function(){
			loadPartial("planning");
		}
	}]);
	
	app.controller("partialController", ["$scope", function($scope){
		$scope.test = function(){
			console.log("test");
		}
	}]);
	
	function redirect(){
		window.location = "html/home.html";
	}
	
	function loadPartial(page) {
        switch (page) {
            case 'medecins':
				console.log("medecins");
                $.ajax({
                    url: 'medecins.html',
                    type: 'GET',
                    dataType: 'html',
                    success: function (result) {
                        $('#partial').html(result);
                    }
                });
                break;
            case 'hopitaux':
                $.ajax({
                    url: 'hopitaux.html',
                    type: 'GET',
                    dataType: 'html',
                    success: function (result) {
                        $('#partial').html(result);
                    }
                });
                break;
            case 'contrats':
                $.ajax({
                    url: 'contrats.html',
                    type: 'GET',
                    dataType: 'html',
                    success: function (result) {
                        $('#partial').html(result);
                    }
                });
                break;
            case 'planning':
                $.ajax({
                    url: 'planning.html',
                    type: 'GET',
                    dataType: 'html',
                    success: function (result) {
                        $('#partial').html(result);
                    }
                });
                break;
            
        }
    }
})();