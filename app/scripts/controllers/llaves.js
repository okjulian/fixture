'use strict';

angular.module('mrMundialApp')
    .controller('LlavesCtrl', function ($scope, Llave) {

        Llave.generarPartidosOctavos();
        Llave.generarPartidosCuartos();

        $scope.partidos = {
            octavos: Llave.partidos.octavos,
            cuartos: Llave.partidos.cuartos
        };

        $scope.$watch(function () {
            return Llave.partidos.cuartos;
        }, function (newValue) {
            $scope.partidos.cuartos = newValue;
        });

        $scope.ponerResultado = function (partido, golesPrimerEquipo, golesSegundoEquipo) {
            Llave.partidos.octavos[partido].ponerResultado(golesPrimerEquipo, golesSegundoEquipo);
        };
    });