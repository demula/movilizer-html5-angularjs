(function() {
    "use strict";
    /**
     * @ngdoc function
     * @name HelloBannerModule.controller:BannerCtrl
     * @description
     * # BannerCtrl
     * Controller of the HelloBannerModule
     */
    angular
        .module('HelloBannerModule')
        .controller('BannerCtrl', function ($scope) {
            $scope.awesomeThings = [
                'Movilizer',
                'AngularJS',
                'HTML5'
            ];

            $scope.productTableView = "/productsTable";
            $scope.productTableLinkText = "Go to the Products Table!";
        });
})();
