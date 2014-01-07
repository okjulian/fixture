'use strict';

angular.module('mrMundialApp')
    .service('Llave', ['Grupo',
            function Llave(Grupo) {

            function filtrarSiNoEstaDefinido(equipo, nombreTemporal) {
                var resultado = equipo.nombre ? equipo : {
                    nombre: nombreTemporal
                };
                return resultado;
            }

            var that = this;

            this.posicionesGrupo = Grupo.obtenerPosiciones();

            this.partidos = {
                octavos: function () {
                    that.posicionesGrupo = Grupo.obtenerPosiciones();
                    return [{
                        equipos: [
                            filtrarSiNoEstaDefinido(that.posicionesGrupo.A[0], '1° - Grupo A'),
                            filtrarSiNoEstaDefinido(that.posicionesGrupo.B[1], '2° - Grupo B')
                        ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.C[0], '1° - Grupo C'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.D[1], '2° - Grupo D')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.E[0], '1° - Grupo E'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.F[1], '2° - Grupo F')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.G[0], '1° - Grupo G'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.H[1], '2° - Grupo H')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.B[0], '1° - Grupo B'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.A[1], '2° - Grupo A')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.D[0], '1° - Grupo D'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.C[1], '2° - Grupo C')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.F[0], '1° - Grupo F'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.E[1], '2° - Grupo E')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.H[0], '1° - Grupo H'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.G[1], '2° - Grupo G')
                    ]
                    }];
                }
            };

            }]);