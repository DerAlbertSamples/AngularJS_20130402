var April;

(function(april) {

    (function(controllers) {

        function firmaController($scope, $resource) {
            
            var firmaResource = $resource('/api/firma/:id');

            firmaResource.query(null, function(result) {
                $scope.firmen = result;
            });
        }

        controllers.Firma = ['$scope', '$resource', firmaController];

    })(april.Controllers || (april.Controllers = {}));
})(April || (April = {}));