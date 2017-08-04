'use strict';
(function() {

    var app=angular.module('formsApp');

    app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('home', {
            url: '/',
            title: 'Forms Homepage',
            templateUrl: 'Views/home.html'
        })
        .state('user-dashboard', {
            url: '/dashboard',
            title: 'User Dashboard',
            views: {
                '': {templateUrl: 'Views/dashboard.html'}
            }
        });

        $urlRouterProvider.otherwise('/');

    });

})();