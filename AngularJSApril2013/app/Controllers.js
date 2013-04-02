var April;

(function (april) {

    (function (controllers) {

        function firmaController($scope, $resource, $routeParams, $location) {

            var firmaResource = $resource('/api/firma/:Id');

            firmaResource.query(null, function (result) {
                $scope.firmen = result;
            });

    
            $scope.showFirma = function (firmaId) {
                firmaResource.get({ Id: firmaId }, function (result) {
                    $scope.firma = result;
                });
            };
            
            if ($routeParams.Id) {
                $scope.showFirma($routeParams.Id);
            } else {
                delete $scope.firma;
            }

        }

        controllers.Firma = ['$scope', '$resource', '$routeParams', '$location', firmaController];

    })(april.Controllers || (april.Controllers = {}));
})(April || (April = {}));