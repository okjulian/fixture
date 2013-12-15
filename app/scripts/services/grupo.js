'use strict';

angular.module('mrMundialApp')
    .service('Grupo', function Grupo() {
        var _grupos = {
            A: {
                equipos: [
                    {
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
                }
               ]
            },
            B: {
                equipos: [
                    {
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
                }
               ]
            },
            C: {
                equipos: [
                    {
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
                }
               ]
            }
        };

        this.equipos = function (letra) {
            return _grupos[letra].equipos;
        };

        this.partidos = function (letra) {
            return [{
                resultado: [null,null],
                equipos: [
                        _grupos[letra].equipos[0],
                        _grupos[letra].equipos[1]
                    ]
            }, {
                resultado: [null,null],
                equipos: [
                        _grupos[letra].equipos[2],
                        _grupos[letra].equipos[3]
                    ]
            }, {
                resultado: [null,null],
                equipos: [
                        _grupos[letra].equipos[0],
                        _grupos[letra].equipos[2]
                    ]
            }, {
                resultado: [null,null],
                equipos: [
                        _grupos[letra].equipos[3],
                        _grupos[letra].equipos[1]
                    ]
            }, {
                resultado: [null,null],
                equipos: [
                        _grupos[letra].equipos[3],
                        _grupos[letra].equipos[0]
                    ]
            }, {
                resultado: [null,null],
                equipos: [
                        _grupos[letra].equipos[1],
                        _grupos[letra].equipos[2]
                    ]
            }];
        };
    });