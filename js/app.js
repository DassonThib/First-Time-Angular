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
			"  <a href='medecins'>Médecins</a>\n" +
			"  <a href='hopitaux'>Hôpitaux</a>\n" +
			"  <a href='contrats'>Contrats</a>\n" +
			"  <a href='planning'>Planning</a>\n" +
			"</nav>\n" +
			"<hr>\n" +
			'<ng-outlet></ng-outlet>\n',
		$routeConfig:[
		{path:'medecins', name:'Médecins', component:'medecins', useAsDefault:true},
		{path:'hopitaux', name:'Hôpitaux', component:'hopitaux'},
		{path:'contrats', name:'Contrats', component:'contrats'},
		{path:'planning', name:'Planning', component:'planning'}
		]
		}).component("hopitaux", {
			templateUrl:"hopitaux.html"
		}).component("medecins", {
			templateUrl:"medecins.html"
		}).component("contrats", {
			templateUrl:"contrats.html"
		}).component("planning", {
			templateUrl:"planning.html"
	});	
	// fin
})();