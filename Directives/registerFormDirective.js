'use strict';
(function() {
    
    var app=angular.module('formsApp');

    app.directive("registerForm", function() {
        return {
            restrict: 'E',
            templateUrl: 'Views/registerForm.html',
            controller: 'registerFormController',
        };
    });

})();