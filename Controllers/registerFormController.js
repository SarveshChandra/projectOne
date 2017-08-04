'use strict';
(function() {
    
    var app=angular.module('formsApp');

    app.controller('registerFormController', function($scope) {
        
        $scope.fname="";
        $scope.lname="";
        $scope.contactcode="";
        $scope.contactnumber="";
        $scope.email="";
        $scope.password="";
        
        $scope.submit=function() {
            alert('User successfully registered.');
        };

    });

})();