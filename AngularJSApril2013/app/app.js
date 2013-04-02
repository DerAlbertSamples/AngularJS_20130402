

function Demo2Ctrl ($scope)
{
    $scope.items = [ { name: 'Köln'},{name : 'Bonn'}, {name:'Berlin'}];

    $scope.addNewItem = function() {
        $scope.items.push({ name: $scope.name });
        $scope.name='';
    }
}