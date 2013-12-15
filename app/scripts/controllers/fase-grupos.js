'use strict';

angular.module('mrMundialApp')
    .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
        $scope.partidos = {
            A: FaseGrupos.obtenerPartidosGrupo('A'),
            B: FaseGrupos.obtenerPartidosGrupo('B'),
            C: FaseGrupos.obtenerPartidosGrupo('C')
        };

        $scope.autoCompletarGrupo = function (letra) {
            $scope.partidos[letra].forEach(function (element, index, array) {
                if (element.resultado[0] === null) {
                    element.resultado[0] = Math.floor(Math.random() * 4);
                }

                if (element.resultado[1] === null) {
                    element.resultado[1] = Math.floor(Math.random() * 4);
                }
            });
        };

        $scope.autoCompletarGrupos = function () {
            var property;
            for (property in $scope.partidos) {
                if ($scope.partidos.hasOwnProperty(property)) {
                    $scope.autoCompletarGrupo(property);
                }
            }
        };
    });