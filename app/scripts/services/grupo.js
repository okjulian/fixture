'use strict';

angular.module('mrMundialApp')
    .service('Grupo', function Grupo() {
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
                }]
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
                }]
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
                }]
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
                }]
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
                }]
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
                }]
            },
            G: {
                equipos: [{
                    nombre: 'Alemania'
                },{
                    nombre: 'Portugal'
                },{
                    nombre: 'Ghana'
                },{
                    nombre: 'USA'
                }]
            },
            H: {
                equipos: [{
                    nombre: 'Bélgica'
                },{
                    nombre: 'Algeria'
                },{
                    nombre: 'Rusia'
                },{
                    nombre: 'Corea'
                }]
            }
        };

        this.equipos = function (letra) {
            return _grupos[letra].equipos;
        };

        this.partidos = function (letra) {
            return [{
                resultado: [null, null],
                equipos: [
                        _grupos[letra].equipos[0],
                        _grupos[letra].equipos[1]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        _grupos[letra].equipos[2],
                        _grupos[letra].equipos[3]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        _grupos[letra].equipos[0],
                        _grupos[letra].equipos[2]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        _grupos[letra].equipos[3],
                        _grupos[letra].equipos[1]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        _grupos[letra].equipos[3],
                        _grupos[letra].equipos[0]
                    ]
            }, {
                resultado: [null, null],
                equipos: [
                        _grupos[letra].equipos[1],
                        _grupos[letra].equipos[2]
                    ]
            }];
        };
    });