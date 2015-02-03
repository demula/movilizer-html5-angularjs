(function() {
    "use strict";
    /**
     * @ngdoc overview
     * @name ProductsTableModule
     * @description
     * # ProductsTableModule
     *
     * Table screen.
     */
    angular
        .module('ProductsTableModule', [
            'ngRoute',
            'MovilizerModule'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/productsTable', {
                    templateUrl: 'components/productsTable/views/productsTable.html',
                    controller: 'TableCtrl'
        });
    });
})();
