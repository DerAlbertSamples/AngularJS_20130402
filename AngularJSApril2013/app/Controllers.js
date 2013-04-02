var April;

(function (april) {

    (function (controllers) {

        function firmaController($scope, $resource, $routeParams) {

            var firmaResource = $resource('/api/firma/:Id');

            firmaResource.query(null, function (result) {
                $scope.firmen = result;
            });

            if ($routeParams.Id) {
                firmaResource.get($routeParams, function(result) {
                    $scope.firma = result;
                });
            } else {
                delete $scope.firma;
            }
            
        }

        controllers.Firma = ['$scope', '$resource', '$routeParams', firmaController];

    })(april.Controllers || (april.Controllers = {}));
})(April || (April = {}));