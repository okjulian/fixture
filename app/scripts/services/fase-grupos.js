'use strict';

angular.module('mrMundialApp')
  .service('FaseGrupos', function FaseGrupos(Grupo) {
      this.obtenerEquiposGrupo = function (letra) {
          return Grupo.equipos(letra);
      };
      this.obtenerPartidosGrupo = function (letra) {
          return Grupo.partidos(letra);
      };
  });
