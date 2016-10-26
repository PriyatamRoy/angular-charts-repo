angular.module("pieChart", ["chart.js"])
        .config(['ChartJsProvider', function (ChartJsProvider) {
                ChartJsProvider.setOptions({
                    chartColors: ['#FF5252', '#666B80'],
                    responsive: true
                });
                
            }]);