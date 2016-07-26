(function(){
	
	var app = angular.module("app", ['ngComponentRouter']);
	
	// Menu routing
	app.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	})	
	app.value('$routerRootComponent', 'app')
	app.component('app', {
		template: 'It worked'
	});		
	// fin
			
	/*
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
    }*/
})();