{{5+5}}
app.controller("sum", function($scope){
$scope.num1 =0;
$scope.num2 =0;
$scope.totalMulti= function() { return $scope.num1 * $scope.num2 }; 
$scope.totalDiv = function() { return $scope.num1 / $scope.num2 }; 
$scope.totalPlus= function() { return $scope.num1 + $scope.num2 }; 
$scope.totalminus= function() { return $scope.num1 - $scope.num2 }; 

});
