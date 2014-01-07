'use strict';

angular.module('mrMundialApp')
    .controller('FaseGruposCtrl', function ($scope, Grupo) {
        $scope.partidos = Grupo.partidos;

        $scope.autoCompletarGrupo = function (letra) {
            Grupo.autoCompletar(letra);
        };

        $scope.autoCompletarGrupos = function () {
            Grupo.autoCompletarTodos();
        };
		
		$scope.ponerResultado = Grupo.ponerResultado;
    });