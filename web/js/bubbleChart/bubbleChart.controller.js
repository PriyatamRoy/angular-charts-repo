angular.module("bubbleChart")
        .controller("BubbleCtrl", ['$scope', '$interval', function ($scope, $interval) {

                $scope.series = ['Series A', 'Series B'];

                $scope.data = [
                    [{
                            x: 40,
                            y: 10,
                            r: 20
                        }],
                    [{
                            x: 10,
                            y: 40,
                            r: 50
                        }]
                ];

                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };

                // Simulate async data update
                $interval(function () {
                    var arr1 = [];
                    var arr2 = [];
                    while (arr1.length < 7) {
                        var x1 = Math.ceil(Math.random() * 100);
                        var y1 = Math.ceil(Math.random() * 100);
                        var r1 = Math.ceil(Math.random() * 20);
                        
                        var x2 = Math.ceil(Math.random() * 100);
                        var y2 = Math.ceil(Math.random() * 100);
                        var r2 = Math.ceil(Math.random() * 20);

                        arr1.push({x:x1, y:y1, r:r1});
                        arr2.push({x:x2, y:y2, r:r2});
                    }

                    $scope.data = [
                        arr1, arr2
                    ];
                    
                }, 3000);
            }]);