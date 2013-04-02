var April;

(function(april) {

    (function (controllers) {
        
        function demo3Ctrl($scope) {
            $scope.items = [
                { name: 'Früh', price: 1.20, lastDrunk: '2013-03-02' },
                { name: 'Reisdorf', price: 1.30, lastDrunk: '2013-02-01' },
                { name: 'Gaffel', price: 1.25, lastDrunk: '2012-12-01' }
            ];

            $scope.addNewItem = function () {
                $scope.items.push({ name: $scope.name, price: $scope.price, lastDrunk: new Date() });
                $scope.name = '';
                $scope.price = '';
            };

            $scope.removeItem = function (item) {
                $scope.items.splice($scope.items.indexOf(item), 1);
            };

            $scope.beerCountText = {
                0: 'Kein Bier!',
                1: 'Nur noch ein Bier vorhanden',
                other: 'Es sind {} Bier vorhanden'
            };
        }

        controllers.Demo3  = demo3Ctrl;

    })(april.Controllers || (april.Controllers = {}));
})(April || (April = {}));