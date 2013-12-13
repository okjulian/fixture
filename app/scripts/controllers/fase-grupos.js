'use strict';

angular.module('mrMundialApp')
  .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
    $scope.partidos = {
        A: FaseGrupos.obtenerPartidosGrupo('A')
    };
  });
