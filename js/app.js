(function(){
	
	angular.module("app", ['ngComponentRouter'])	
	// Menu routing
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	})	
	.value('$routerRootComponent', 'app')
	.component('app', {
		template: 
			"<nav>\n" +
			"  <a href='medecins.html'>Médecins</a>\n" +
			"  <a href='hopitaux.html'>Hôpitaux</a>\n" +
			"  <a href='contrats.html'>Contrats</a>\n" +
			"  <a href='planning.html'>Planning</a>\n" +
			"</nav>\n" +
			'<ng-outlet></ng-outlet>\n',
		$routeConfig:[
		{path:'medecins', name:'Médecins', component:'medecins', useAsDefault:true},
		{path:'hopitaux', name:'Hôpitaux', component:'hopitaux'},
		{path:'contrats', name:'Contrats', component:'contrats'},
		{path:'planning', name:'Planning', component:'planning'}
		]
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