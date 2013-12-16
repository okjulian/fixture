'use strict';

angular.module('mrMundialApp')
    .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
        $scope.partidos = {
            A: FaseGrupos.obtenerPartidosGrupo('A'),
            B: FaseGrupos.obtenerPartidosGrupo('B'),
            C: FaseGrupos.obtenerPartidosGrupo('C'),
            D: FaseGrupos.obtenerPartidosGrupo('D'),
            E: FaseGrupos.obtenerPartidosGrupo('E'),
            F: FaseGrupos.obtenerPartidosGrupo('F'),
            G: FaseGrupos.obtenerPartidosGrupo('G'),
            H: FaseGrupos.obtenerPartidosGrupo('H')
        };

        $scope.autoCompletarGrupo = function (letra) {
            FaseGrupos.autoCompletarGrupo(letra);
        };

        $scope.autoCompletarGrupos = function () {
            FaseGrupos.autoCompletarTodos();
        };
    });