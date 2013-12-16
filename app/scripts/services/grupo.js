'use strict';

angular.module('mrMundialApp')
    .service('Grupo', function Grupo() {
        var that = this;

        var _grupos = {
            A: {
                equipos: [{
                        nombre: 'Brasil'
                },
                    {
                        nombre: 'Croacia'
                },
                    {
                        nombre: 'Mexico'
                },
                    {
                        nombre: 'Camerún'
                }],
                partidos: []
            },
            B: {
                equipos: [{
                        nombre: 'España'
                },
                    {
                        nombre: 'Holanda'
                },
                    {
                        nombre: 'Chile'
                },
                    {
                        nombre: 'Australia'
                }],
                partidos: []
            },
            C: {
                equipos: [{
                        nombre: 'Colombia'
                },
                    {
                        nombre: 'Grecia'
                },
                    {
                        nombre: 'Costa de Marfil'
                },
                    {
                        nombre: 'Japón'
                }],
                partidos: []
            },
            D: {
                equipos: [{
                        nombre: 'Uruguay'
                },
                    {
                        nombre: 'Costa Rica'
                },
                    {
                        nombre: 'Inglaterra'
                },
                    {
                        nombre: 'Italia'
                }],
                partidos: []
            },
            E: {
                equipos: [{
                    nombre: 'Suiza'
                }, {
                    nombre: 'Ecuador'
                }, {
                    nombre: 'Francia'
                }, {
                    nombre: 'Honduras'
                }],
                partidos: []
            },
            F: {
                equipos: [{
                        nombre: 'Argentina'
                },
                    {
                        nombre: 'Bosnia'
                },
                    {
                        nombre: 'Iran'
                },
                    {
                        nombre: 'Nigeria'
                }],
                partidos: []
            },
            G: {
                equipos: [{
                    nombre: 'Alemania'
                }, {
                    nombre: 'Portugal'
                }, {
                    nombre: 'Ghana'
                }, {
                    nombre: 'USA'
                }],
                partidos: []
            },
            H: {
                equipos: [{
                    nombre: 'Bélgica'
                }, {
                    nombre: 'Algeria'
                }, {
                    nombre: 'Rusia'
                }, {
                    nombre: 'Corea'
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

        this.partidos = function (letra) {
            return _grupos[letra].partidos;
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
    });