'use strict';

angular.module('mrMundialApp')
    .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
        $scope.partidos = {
            A: FaseGrupos.obtenerPartidosGrupo('A'),
            B: FaseGrupos.obtenerPartidosGrupo('B')
        };

        $scope.autoCompletarGrupo = function (letra) {
            $scope.partidos[letra].forEach(function (element, index, array) {
                element.resultado[0] = Math.floor(Math.random() * 4);
                element.resultado[1] = Math.floor(Math.random() * 4);
            });
        };
    });