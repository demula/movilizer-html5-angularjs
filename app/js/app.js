'use strict';

/**
 * @ngdoc overview
 * @name MovilizerApp
 * @description
 * # MovilizerApp
 *
 * Main module of the application.
 */
angular
    .module('MovilizerApp', [
        'HelloBannerModule',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
    });
});
