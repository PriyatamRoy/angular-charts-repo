angular.module("lineChart")
        .controller("LineCtrl", ['$scope', '$interval', function ($scope, $interval) {

                $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
                $scope.series = ['Series A', 'Series B'];
                $scope.data = [
                    [65, 59, 80, 81, 56, 55, 40],
                    [28, 48, 40, 19, 86, 27, 90]
                ];
                $scope.options = {legend: { display: true }};
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };

                // Simulate async data update
                $interval(function () {
                    var arr1 = [];
                    var arr2 = [];
                    while (arr1.length < 7) {
                        var randomnumber1 = Math.ceil(Math.random() * 100);
                        var randomnumber2 = Math.ceil(Math.random() * 100);
                        
                        arr1[arr1.length] = randomnumber1;
                        arr2[arr2.length] = randomnumber2;
                    }
                    
                    $scope.data = [
                        arr1, arr2
                    ];
                }, 3000);
            }]);