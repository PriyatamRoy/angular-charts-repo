angular.module("barChart", ["chart.js"])
        .config(['ChartJsProvider', function (ChartJsProvider) {
                ChartJsProvider.setOptions({
                    chartColors: ['#FF5252', '#666B80'],
                    responsive: true
                });
                //ChartJsProvider.setOptions();
            }]);