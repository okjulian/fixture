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

            function ponerResultado(golesPrimerEquipo, golesSegundoEquipo) {
                this.resultado[0] = golesPrimerEquipo;
                this.resultado[1] = golesSegundoEquipo;
                if (golesPrimerEquipo > golesSegundoEquipo) {
                    this.ganador = this.equipos[0];
                } else if (golesPrimerEquipo < golesSegundoEquipo) {
                    this.ganador = this.equipos[1];
                }
                that.generarPartidosCuartos();
            }

            var that = this;

            this.posicionesGrupo = Grupo.obtenerPosiciones();

            this.generarPartidosOctavos = function () {
                that.posicionesGrupo = Grupo.obtenerPosiciones();
                that.partidos.octavos = [{
                    equipos: [
                            filtrarSiNoEstaDefinido(that.posicionesGrupo.A[0], '1° - Grupo A'),
                            filtrarSiNoEstaDefinido(that.posicionesGrupo.B[1], '2° - Grupo B')
                        ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.C[0], '1° - Grupo C'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.D[1], '2° - Grupo D')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.E[0], '1° - Grupo E'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.F[1], '2° - Grupo F')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.G[0], '1° - Grupo G'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.H[1], '2° - Grupo H')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.B[0], '1° - Grupo B'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.A[1], '2° - Grupo A')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.D[0], '1° - Grupo D'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.C[1], '2° - Grupo C')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.F[0], '1° - Grupo F'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.E[1], '2° - Grupo E')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.H[0], '1° - Grupo H'),
                        filtrarSiNoEstaDefinido(that.posicionesGrupo.G[1], '2° - Grupo G')
                    ],
                    ganador: '',
                    resultado: [null, null],
                    ponerResultado: ponerResultado
                    }];
            };

            this.generarPartidosCuartos = function () {
                that.partidos.cuartos = [{
                    equipos: [
                            filtrarSiNoEstaDefinido(that.partidos.octavos[0].ganador, 'Ganador octavos 1'),
                            filtrarSiNoEstaDefinido(that.partidos.octavos[1].ganador, 'Ganador octavos 2')
                        ]
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.partidos.octavos[2].ganador, 'Ganador octavos 3'),
                        filtrarSiNoEstaDefinido(that.partidos.octavos[3].ganador, 'Ganador octavos 4')
                    ]
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.partidos.octavos[4].ganador, 'Ganador octavos 5'),
                        filtrarSiNoEstaDefinido(that.partidos.octavos[5].ganador, 'Ganador octavos 6')
                    ]
                    }, {
                    equipos: [
                        filtrarSiNoEstaDefinido(that.partidos.octavos[6].ganador, 'Ganador octavos 7'),
                        filtrarSiNoEstaDefinido(that.partidos.octavos[7].ganador, 'Ganador octavos 8')
                    ]
                    }];
            };

            this.partidos = {
                octavos: [{
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }],
                cuartos: [{
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }, {
                    equipos: [{
                        nombre: ''
                    }, {
                        nombre: ''
                    }]
                }]
            };

                }]);