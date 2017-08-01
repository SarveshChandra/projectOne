'use strict';
(function() {

    var app=angular.module('formsApp');

    app.controller('loginFormController', function($scope, $location) {
            
        $scope.input1="";
        $scope.input2="";

        $scope.submit=function() {

            var input1=$scope.input1;
            var input2=$scope.input2;

            if(input1=='admin@admin.com' && input2=='pass1234') {
                $location.path('/dashboard');
            }

            else {
                alert('Incorrect email address or password! Try again.');
                $scope.input1="";
                $scope.input2="";
            }
        };

    });

})();