'use strict';

angular.module('mrMundialApp')
    .controller('FaseGruposCtrl', function ($scope, Grupo) {
        $scope.partidos = {
            A: Grupo.partidos('A'),
            B: Grupo.partidos('B'),
            C: Grupo.partidos('C'),
            D: Grupo.partidos('D'),
            E: Grupo.partidos('E'),
            F: Grupo.partidos('F'),
            G: Grupo.partidos('G'),
            H: Grupo.partidos('H')
        };

        $scope.autoCompletarGrupo = function (letra) {
            Grupo.autoCompletar(letra);
        };

        $scope.autoCompletarGrupos = function () {
            Grupo.autoCompletarTodos();
        };
    });