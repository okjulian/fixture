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

        function reordenar(arreglo) {
            /* Mientras el tamaño del arreglo sea mayor a 0
			extraer un valor al azar del arreglo
			agregarlo al arreglo resultado
			*/
            var resultado = [];
            while (arreglo.length > 0) {
                var valorExtraido = arreglo.splice(Math.floor(Math.random() * arreglo.length), 1);
                resultado.push(valorExtraido[0]);
            }
            return resultado;
        }

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
            //Setear los puntos y goles a 0 para no volver a sumar
            for (var e = 0; e <= 3; e++) {
                _grupos[grupo].equipos[e].puntos = 0;
                _grupos[grupo].equipos[e].goles = 0;
            }
            for (var partido in partidos) {
                //Si hay resultado
                if (partidos[partido].resultado[0] !== null && partidos[partido].resultado[1] !== null) {
                    if (partidos[partido].resultado[0] === partidos[partido].resultado[1]) {
                        //Partido empatado 1 punto para cada uno
                        partidos[partido].equipos[0].puntos += 1;
                        partidos[partido].equipos[1].puntos += 1;
                    } else if (partidos[partido].resultado[0] > partidos[partido].resultado[1]) {
                        //Partido ganado para el primer equipo +3 puntos
                        partidos[partido].equipos[0].puntos += 3;
                    } else {
                        //Partido ganado para el segundo equipo +3 puntos
                        partidos[partido].equipos[1].puntos += 3;
                    }
                    //Sumar goles
                    partidos[partido].equipos[0].goles += partidos[partido].resultado[0];
                    partidos[partido].equipos[1].goles += partidos[partido].resultado[1];
                }
            }
            var equipos = [];
            var empates = [];
            var posiciones = [];
            //Arreglo con equipos con puntos para descartar quienes no tienen puntos
            for (var equipo in _grupos[grupo].equipos) {
                if (_grupos[grupo].equipos[equipo].puntos > 0) {
                    equipos.push(_grupos[grupo].equipos[equipo]);
                }
            }
            if (equipos.length >= 2) {
                equipos.sort(function (a, b) {
                    // ordenar de mayor a menor en goles
                    return b.goles - a.goles;
                });
                equipos.sort(function (a, b) {
                    // ordenar de mayor a menor en puntos
                    return b.puntos - a.puntos;
                });
                for (var i = 0; i < equipos.length; i++) {
                    var eq1;
                    var eq2;
                    var empata = false;
                    //Si existen equipos restantes
                    if (i < equipos.length - 1) {
                        eq1 = equipos[i];
                        eq2 = equipos[i + 1];
                        //Si tienen los mismos puntos
                        if (eq1.puntos === eq2.puntos) {
                            //Si tienen los mismos goles -> ir a sorteo
                            if (eq1.goles === eq2.goles) {
                                empata = true;
                            }
                        }
                    } else {
                        eq1 = equipos[i];
                        eq2 = equipos[i - 1];
                        if (eq1.puntos === eq2.puntos) {
                            //Si tiene los mismos goles que el anterior -> ir a sorteo
                            if (eq1.goles === eq2.goles) {
                                empata = true;
                            }
                        }
                    }
                    //Si existen equipos anteriores a sorteo entonces esta empatado con el equipo actual -> ir a sorteo
                    if (empates.length > 0) {
                        empata = true;
                    }
                    if (empata) {
                        //A sorteo
                        empates.push(eq1.nombre);
                    } else {
                        //Directamente a posicion fija
                        posiciones.push(eq1.nombre);
                    }
                }
                //Si las posiciones son menores a 2 puestos y hay equipos para desempatar
                if (empates.length >= 2 && posiciones.length < 2) {
                    //Desempatar y añadir a posiciones fijas
                    empates = reordenar(empates);
                    posiciones.push(empates[0]);
                    posiciones.push(empates[1]);
                }
                return [{
                    nombre: posiciones[0]
                }, {
                    nombre: posiciones[1]
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