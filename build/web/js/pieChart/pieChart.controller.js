angular.module("pieChart")
        .controller("PieCtrl", ['$scope', '$interval', function ($scope, $interval) {

                $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
                $scope.data = [300, 500, 100];
                
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };

                // Simulate async data update
                $interval(function () {
                    var arr1 = [];
                    
                    while (arr1.length < 3) {
                        var randomnumber1 = Math.ceil(Math.random() * 100);
                        
                        arr1[arr1.length] = randomnumber1;
                    }

                    $scope.data = arr1;
                    
                }, 3000);
            }]);