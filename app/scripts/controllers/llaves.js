'use strict';

angular.module('mrMundialApp')
    .controller('LlavesCtrl', function ($scope, Llave) {
        $scope.$watchCollection(function () { return Llave.partidos }, function (data) {
            $scope.partidos = {
                octavos: data.octavos
            };
        });
    });