(function() {
    "use strict";
    /**
     * @ngdoc function
     * @name ProductsTableModule.controller:TableCtrl
     * @description
     * # TableCtrl
     * Controller of the ProductsTableModule
     */
    angular
        .module('ProductsTableModule')
        .controller('TableCtrl', function ($scope, ProductsFactory) {
            $scope.awesomeThings = [
                'Movilizer',
                'AngularJS',
                'HTML5'
            ];
            ProductsFactory.getProducts(10, 1, ["name"]).then(
                function(products) {
                    $scope.productsInTable = products;
                },
                function(error) {
                    $scope.productsInTable = [error];
                }
            );
        });
})();
