'use strict';

describe('Service: Llave', function () {

    beforeEach(module('mrMundialApp', function ($provide) {
        GrupoMock = jasmine.createSpyObj('GrupoMock', ['obtenerPosiciones']);
        GrupoMock.obtenerPosiciones.andCallFake(function () {
            return {
                A: [{
                    nombre: null
                    }, {
                    nombre: null
                    }],
                B: [{
                    nombre: null
                    }, {
                    nombre: 'Holanda'
                    }],
                C: [{
                    nombre: 'Colombia'
                }, {
                    nombre: 'Japón'
                }],
                D: [{
                    nombre: 'Uruguay'
                }, {
                    nombre: 'Italia'
                }],
                E: [{
                    nombre: 'Francia'
                }, {
                    nombre: 'Ecuador'
                }],
                F: [{
                    nombre: 'Argentina'
                }, {
                    nombre: 'Bosnia'
                }],
                G: [{
                    nombre: 'Alemania'
                }, {
                    nombre: 'Portugal'
                }],
                H: [{
                    nombre: 'Bélgica'
                }, {
                    nombre: 'Rusia'
                }]
            };
        });
        $provide.value('Grupo', GrupoMock);
    }));

    // instantiate service
    var Llave,
        GrupoMock;

    beforeEach(inject(function (_Llave_) {
        Llave = _Llave_;
    }));

    describe('posiciones', function () {

        it('deberia obtenerlas del servicio Grupo', function () {
            expect(GrupoMock.obtenerPosiciones).toHaveBeenCalled();
        });
    });

    describe('Octavos', function () {

        beforeEach(function () {
            Llave.generarPartidosOctavos();
        });

        describe('partidos', function () {
            it('primer partido deberia ser el primero del grupo A contra el segundo del B', function () {
                expect(Llave.partidos.octavos[0].equipos[0].nombre).toBe('1° - Grupo A');
                expect(Llave.partidos.octavos[0].equipos[1].nombre).toBe('Holanda');
            });

            it('segundo deberia ser el primero del grupo C contra el segundo del D', function () {
                expect(Llave.partidos.octavos[1].equipos[0].nombre).toBe('Colombia');
                expect(Llave.partidos.octavos[1].equipos[1].nombre).toBe('Italia');
            });

            it('tercero deberia ser el primero del grupo E contra el segundo del F', function () {
                expect(Llave.partidos.octavos[2].equipos[0].nombre).toBe('Francia');
                expect(Llave.partidos.octavos[2].equipos[1].nombre).toBe('Bosnia');
            });

            it('cuarto deberia ser el primero del grupo G contra el segundo del H', function () {
                expect(Llave.partidos.octavos[3].equipos[0].nombre).toBe('Alemania');
                expect(Llave.partidos.octavos[3].equipos[1].nombre).toBe('Rusia');
            });

            it('quinto deberia ser el primero del grupo B contra el segundo del A', function () {
                expect(Llave.partidos.octavos[4].equipos[0].nombre).toBe('1° - Grupo B');
                expect(Llave.partidos.octavos[4].equipos[1].nombre).toBe('2° - Grupo A');
            });

            it('sexto deberia ser el primero del grupo D contra el segundo del C', function () {
                expect(Llave.partidos.octavos[5].equipos[0].nombre).toBe('Uruguay');
                expect(Llave.partidos.octavos[5].equipos[1].nombre).toBe('Japón');
            });

            it('septimo deberia ser el primero del grupo F contra el segundo del E', function () {
                expect(Llave.partidos.octavos[6].equipos[0].nombre).toBe('Argentina');
                expect(Llave.partidos.octavos[6].equipos[1].nombre).toBe('Ecuador');
            });

            it('octavo deberia ser el primero del grupo H contra el segundo del G', function () {
                expect(Llave.partidos.octavos[7].equipos[0].nombre).toBe('Bélgica');
                expect(Llave.partidos.octavos[7].equipos[1].nombre).toBe('Portugal');
            });
        });

        describe('ganadores', function () {
            it('deberian ser asignados una vez que se completen sus partidos', function () {
                var segundoPartido = Llave.partidos.octavos[1];
                var tercerPartido = Llave.partidos.octavos[2];

                expect(segundoPartido.ganador).toBe('');
                expect(tercerPartido.ganador).toBe('');

                segundoPartido.ponerResultado(3, 1);
                tercerPartido.ponerResultado(0, 2);

                expect(segundoPartido.ganador.nombre).toBe('Colombia');
                expect(tercerPartido.ganador.nombre).toBe('Bosnia');
            });
        });

    });

    describe('Cuartos', function () {

        beforeEach(function () {
            Llave.generarPartidosOctavos();
            Llave.generarPartidosCuartos();
        });

        describe('partidos', function () {
            it('primer partido deberia ser el ganador del partido 1 de octavos contra el ganador del partido 2', function () {
                expect(Llave.partidos.cuartos[0].equipos[0].nombre).toBe('Ganador octavos 1');
                expect(Llave.partidos.cuartos[0].equipos[1].nombre).toBe('Ganador octavos 2');
            });

            it('segundo partido deberia ser el ganador del partido 3 de octavos contra el ganador del partido 4', function () {
                expect(Llave.partidos.cuartos[1].equipos[0].nombre).toBe('Ganador octavos 3');
                expect(Llave.partidos.cuartos[1].equipos[1].nombre).toBe('Ganador octavos 4');
            });

            it('tercer partido deberia ser el ganador del partido 5 de octavos contra el ganador del partido 6', function () {
                expect(Llave.partidos.cuartos[2].equipos[0].nombre).toBe('Ganador octavos 5');
                expect(Llave.partidos.cuartos[2].equipos[1].nombre).toBe('Ganador octavos 6');
            });

            it('cuarto partido deberia ser el ganador del partido 7 de octavos contra el ganador del partido 8', function () {
                expect(Llave.partidos.cuartos[3].equipos[0].nombre).toBe('Ganador octavos 7');
                expect(Llave.partidos.cuartos[3].equipos[1].nombre).toBe('Ganador octavos 8');
            });
        });

    });

});