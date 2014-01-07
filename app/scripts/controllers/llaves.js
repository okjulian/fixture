'use strict';

angular.module('mrMundialApp')
    .controller('LlavesCtrl', function ($scope, Llave) {

        $scope.partidos = {
            octavos: Llave.partidos.octavos()
        };
    });