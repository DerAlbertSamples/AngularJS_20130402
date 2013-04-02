
(function(angular, ns) {
    var module = angular.module('april', ['ngResource']);

    module.config(function($routeProvider) {
        $routeProvider
            .when('/home', { templateUrl: 'home.html' })
            .when('/firma', { templateUrl: 'firma.html', controller:'Firma' })
            .when('/firma/:Id', { templateUrl: 'firma.html', controller: 'Firma' })
            .when('/about', { templateUrl: 'about.html' })
            .when('/contact', { templateUrl: 'contact.html' })
            .otherwise({ redirectTo: '/home' });
    });
    module.controller('Firma', ns.Controllers.Firma);
})(angular, April);

