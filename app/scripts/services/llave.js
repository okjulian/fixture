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
                    return [{
                        equipos: [
                            filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().A[0], '1° - Grupo A'),
                            filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().B[1], '2° - Grupo B')
                        ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().C[0], '1° - Grupo C'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().D[1], '2° - Grupo D')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().E[0], '1° - Grupo E'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().F[1], '2° - Grupo F')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().G[0], '1° - Grupo G'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().H[1], '2° - Grupo H')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().B[0], '1° - Grupo B'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().A[1], '2° - Grupo A')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().D[0], '1° - Grupo D'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().C[1], '2° - Grupo C')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().F[0], '1° - Grupo F'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().E[1], '2° - Grupo E')
                    ]
                    }, {
                        equipos: [
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().H[0], '1° - Grupo H'),
                        filtrarSiNoEstaDefinido(Grupo.obtenerPosiciones().G[1], '2° - Grupo G')
                    ]
                    }];
                }
            };

            }]);