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
            }
        };

        this.equipos = function (letra) {
            return _grupos[letra].equipos;
        };
        
        this.partidos = function (letra) {
            return [
                {
                    equipos: [
                        _grupos[letra].equipos[0],
                        _grupos[letra].equipos[1]
                    ]
                },
                {
                    equipos: [
                        _grupos[letra].equipos[2],
                        _grupos[letra].equipos[3]
                    ]
                },
                {
                    equipos: [
                        _grupos[letra].equipos[0],
                        _grupos[letra].equipos[2]
                    ]
                },
                {
                    equipos: [
                        _grupos[letra].equipos[3],
                        _grupos[letra].equipos[1]
                    ]
                },
                {
                    equipos: [
                        _grupos[letra].equipos[3],
                        _grupos[letra].equipos[0]
                    ]
                },
                {
                    equipos: [
                        _grupos[letra].equipos[1],
                        _grupos[letra].equipos[2]
                    ]
                }
            ];
        };
    });