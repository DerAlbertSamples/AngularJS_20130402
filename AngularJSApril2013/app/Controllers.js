var April;

(function (april) {

    (function (controllers) {

        function firmaController($scope, $resource, $routeParams, $location) {

            var firmaResource = $resource('/api/firma/:Id');

            firmaResource.query(null, function (result) {
                $scope.firmen = result;
            });

            if ($routeParams.Id) {
                $scope.showFirma($routeParams.Id);
            } else {
                delete $scope.firma;
            }

            $scope.showFirma = function(firmaId) {
                firmaResource.get({ Id: firmaId }, function(result) {
                    $scope.firma = result;
                });
            };
        }

        controllers.Firma = ['$scope', '$resource', '$routeParams', '$location', firmaController];

    })(april.Controllers || (april.Controllers = {}));
})(April || (April = {}));