'use strict';

/**
 * @ngdoc overview
 * @name HelloBannerModule
 * @description
 * # HelloBannerModule
 *
 * Banner place holder for welcome screen.
 */
angular
    .module('HelloBannerModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/helloBanner/views/banner.html',
                controller: 'BannerCtrl'
    });
});
