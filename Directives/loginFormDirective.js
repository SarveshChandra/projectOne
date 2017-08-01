'use strict';
(function() {

    var app=angular.module('formsApp');

    app.directive("loginForm", function() {
            return {
                restrict: 'E',
                templateUrl: 'Views/loginForm.html',
                controller: 'loginFormController',
            };
    });

})();