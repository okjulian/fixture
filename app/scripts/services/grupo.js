'use strict';

angular.module('mrMundialApp')
    .service('Grupo', function Grupo() {
        var that = this;

        var _grupos = {
            A: {
                equipos: [{
                        nombre: 'Brasil',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Croacia',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Mexico',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Camerún',
                        puntos: 0,
                        goles: 0
                }],
                partidos: []
            },
            B: {
                equipos: [{
                        nombre: 'España',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Holanda',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Chile',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Australia',
                        puntos: 0,
                        goles: 0
                }],
                partidos: []
            },
            C: {
                equipos: [{
                        nombre: 'Colombia',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Grecia',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Costa de Marfil',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Japón',
                        puntos: 0,
                        goles: 0
                }],
                partidos: []
            },
            D: {
                equipos: [{
                        nombre: 'Uruguay',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Costa Rica',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Inglaterra',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Italia',
                        puntos: 0,
                        goles: 0
                }],
                partidos: []
            },
            E: {
                equipos: [{
                    nombre: 'Suiza',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Ecuador',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Francia',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Honduras',
                    puntos: 0,
                    goles: 0
                }],
                partidos: []
            },
            F: {
                equipos: [{
                        nombre: 'Argentina',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Bosnia',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Iran',
                        puntos: 0,
                        goles: 0
                },
                    {
                        nombre: 'Nigeria',
                        puntos: 0,
                        goles: 0
                }],
                partidos: []
            },
            G: {
                equipos: [{
                    nombre: 'Alemania',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Portugal',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Ghana',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'USA',
                    puntos: 0,
                    goles: 0
                }],
                partidos: []
            },
            H: {
                equipos: [{
                    nombre: 'Bélgica',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Algeria',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Rusia',
                    puntos: 0,
                    goles: 0
                }, {
                    nombre: 'Corea',
                    puntos: 0,
                    goles: 0
                }],
                partidos: []
            }
        };

        function generarTodosLosPartidos() {
            for (var property in _grupos) {
                if (_grupos.hasOwnProperty(property)) {
                    _grupos[property].partidos = generarPartidosGrupo(_grupos[property].equipos);
                }
            }
        }

        function generarPartidosGrupo(equipos) {
            return [{
                resultado: [null, null],
                equipos: [
                        equipos[0],
                        equipos[1]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        equipos[2],
                        equipos[3]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        equipos[0],
                        equipos[2]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        equipos[3],
                        equipos[1]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        equipos[3],
                        equipos[0]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        equipos[1],
                        equipos[2]
                    ]
            }];
        }

        generarTodosLosPartidos();

        this.equipos = function (letra) {
            return _grupos[letra].equipos;
        };

        this.partidos = {
            A: _grupos.A.partidos,
            B: _grupos.B.partidos,
            C: _grupos.C.partidos,
            D: _grupos.D.partidos,
            E: _grupos.E.partidos,
            F: _grupos.F.partidos,
            G: _grupos.G.partidos,
            H: _grupos.H.partidos
        };

        this.autoCompletar = function (letra) {
            _grupos[letra].partidos.forEach(function (element) {
                if (element.resultado[0] === null) {
                    element.resultado[0] = Math.floor(Math.random() * 4);
                }

                if (element.resultado[1] === null) {
                    element.resultado[1] = Math.floor(Math.random() * 4);
                }
            });
        };

        this.autoCompletarTodos = function () {
            var property;
            for (property in _grupos) {
                if (_grupos.hasOwnProperty(property)) {
                    that.autoCompletar(property);
                }
            }
        };

        var determinarGanadores = function (partidos, grupo) {
            for (var partido in partidos) {
                if (partidos[partido].resultado[0] !== null && partidos[partido].resultado[1] !== null) {
                    if (partidos[partido].resultado[0] === partidos[partido].resultado[1]) {
                        partidos[partido].equipos[0].puntos += 1;
                        partidos[partido].equipos[1].puntos += 1;
                    } else if (partidos[partido].resultado[0] > partidos[partido].resultado[1]) {
                        partidos[partido].equipos[0].puntos += 3;
                    } else {
                        partidos[partido].equipos[1].puntos += 3;
                    }
                    partidos[partido].equipos[0].goles += partidos[partido].resultado[0];
                    partidos[partido].equipos[1].goles += partidos[partido].resultado[1];
                }
            }
            var equipos = [];
            for (var equipo in _grupos[grupo].equipos) {
                if (_grupos[grupo].equipos[equipo].puntos > 0) {
                    equipos.push(_grupos[grupo].equipos[equipo]);
                }
            }
            equipos.sort(function (a, b) {
                // ordenar de mayor a menor
                return b.puntos - a.puntos;
            });
            if (equipos.length > 2) {
                if (equipos[0].puntos === equipos[1].puntos) {
                    if (equipos[0].goles < equipos[1].goles) {
                        var primero = equipos[0];
                        var segundo = equipos[1];
                        equipos[0] = segundo;
                        equipos[1] = primero;
                    }
                }
                return [{
                    nombre: equipos[0].nombre
                }, {
                    nombre: equipos[1].nombre
                }];
            } else {
                return [{
                    nombre: null
                }, {
                    nombre: null
                }];
            }
        };

        this.obtenerPosiciones = function () {
            var posiciones = {};
            for (var grupo in _grupos) {
                if (_grupos.hasOwnProperty(grupo)) {
                    var ganadores = determinarGanadores(_grupos[grupo].partidos, grupo);
                    posiciones[grupo] = ganadores;
                }
            }
            return posiciones;
        };

        this.ponerResultado = function (grupo, partido, resultado) {
            _grupos[grupo].partidos[partido].resultado = resultado;
        };
    });