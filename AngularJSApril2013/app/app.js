
(function(angular, ns) {
    var module = angular.module('april', []);

    module.config(function($routeProvider) {
        $routeProvider
            .when("/home", { templateUrl: "home.html" })
            .when("/firma", { templateUrl: "firma.html" })
            .when("/about", { templateUrl: "about.html" })
            .when("/contact", { templateUrl: "contact.html" })
            .otherwise({ redirectTo: '/home' });
    });
    module.controller("Demo3", ns.Controllers.Demo3);
})(angular, April);

