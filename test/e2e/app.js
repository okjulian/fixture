(function () {
    'use strict';

    describe('App', function () {
        beforeEach(function () {
            browser().navigateTo('/');
        });

        it('no deberia redireccionar', function () {
            expect(browser().location().url()).toBe('/');
        });

        it('deberia empezar mostrando los 6 partidos del grupo A', function () {
            expect(claseDeTabDelGrupo('A')).toContain('active');
            expect(cantidadDePartidosDelGrupo('A')).toBe(6);
        });

        it('deberia mostrar los 6 partidos del grupo B', function () {
            tabDelGrupo('B').click();
            expect(claseDeTabDelGrupo('B')).toContain('active');
            expect(cantidadDePartidosDelGrupo('B')).toBe(6);
        });
		
		it('deberia mostrar cero si un resultado se coloca como negativo', function () {
            ponerResultado('A', 1, 1, -1);
            expect(obtenerResultado('A', 1, 1)).toBe('0');
        });
		
		it('deberia mostrar cero si un resultado se coloca como String', function () {
            ponerResultado('B', 1, 1, 'aasd');
            expect(obtenerResultado('B', 1, 1)).toBe('0');
        });

        describe('Autocompletar', function () {

            it('deberia poder generar los resultados del grupo A', function () {
                botonCompletarGrupo('A').click();
                expect(resultadosGrupo('A')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo B', function () {
                tabDelGrupo('B').click();
                botonCompletarGrupo('B').click();
                expect(resultadosGrupo('B')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo C', function () {
                tabDelGrupo('C').click();
                botonCompletarGrupo('C').click();
                expect(resultadosGrupo('C')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo D', function () {
                tabDelGrupo('D').click();
                botonCompletarGrupo('D').click();
                expect(resultadosGrupo('D')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo E', function () {
                tabDelGrupo('E').click();
                botonCompletarGrupo('E').click();
                expect(resultadosGrupo('E')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo F', function () {
                tabDelGrupo('F').click();
                botonCompletarGrupo('F').click();
                expect(resultadosGrupo('F')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo G', function () {
                tabDelGrupo('G').click();
                botonCompletarGrupo('G').click();
                expect(resultadosGrupo('G')).not().toBe('');
            });

            it('deberia poder generar los resultados del grupo H', function () {
                tabDelGrupo('H').click();
                botonCompletarGrupo('H').click();
                expect(resultadosGrupo('H')).not().toBe('');
            });

            it('deberia poder generar los resultados de todos los grupos desde el grupo A', function () {
                botonCompletarGruposDelGrupo('A').click();
                expect(resultadosGrupo('A')).not().toBe('');
                expect(resultadosGrupo('B')).not().toBe('');
            });

            it('deberia poder generar los resultados de todos los grupos desde el grupo B', function () {
                tabDelGrupo('B').click();
                botonCompletarGruposDelGrupo('B').click();
                expect(resultadosGrupo('A')).not().toBe('');
                expect(resultadosGrupo('B')).not().toBe('');
            });

            it('no deberia completar el resultado de un partido ya asignado manualmente en el grupo A', function () {
                ponerResultado('A', 1, 1, 2);
                ponerResultado('A', 1, 2, 3);
                botonCompletarGrupo('A').click();
                expect(obtenerResultado('A', 1, 1)).toBe('2');
                expect(obtenerResultado('A', 1, 2)).toBe('3');
            });

            it('no deberia completar el resultado de un partido ya asignado manualmente en el grupo B', function () {
                tabDelGrupo('B').click();
                ponerResultado('B', 2, 1, 1);
                ponerResultado('B', 2, 2, 1);
                botonCompletarGrupo('B').click();
                expect(obtenerResultado('B', 2, 1)).toBe('1');
                expect(obtenerResultado('B', 2, 2)).toBe('1');
            });
        });

    });

    describe('Octavos', function () {
        it('deberia mostrar los equipos a enfrentarse antes de que finalicen los grupos', function () {
            botonLlaves().click();
            expect(cantidadDePartidos('octavos')).toBe(8);
            expect(nombreEquipo('octavos', 1, 1)).toBe('1° - Grupo A');
            expect(nombreEquipo('octavos', 1, 2)).toBe('2° - Grupo B');
            expect(nombreEquipo('octavos', 2, 1)).toBe('1° - Grupo C');
            expect(nombreEquipo('octavos', 2, 2)).toBe('2° - Grupo D');
            expect(nombreEquipo('octavos', 3, 1)).toBe('1° - Grupo E');
            expect(nombreEquipo('octavos', 3, 2)).toBe('2° - Grupo F');
            expect(nombreEquipo('octavos', 4, 1)).toBe('1° - Grupo G');
            expect(nombreEquipo('octavos', 4, 2)).toBe('2° - Grupo H');
            expect(nombreEquipo('octavos', 5, 1)).toBe('1° - Grupo B');
            expect(nombreEquipo('octavos', 5, 2)).toBe('2° - Grupo A');
            expect(nombreEquipo('octavos', 6, 1)).toBe('1° - Grupo D');
            expect(nombreEquipo('octavos', 6, 2)).toBe('2° - Grupo C');
            expect(nombreEquipo('octavos', 7, 1)).toBe('1° - Grupo F');
            expect(nombreEquipo('octavos', 7, 2)).toBe('2° - Grupo E');
            expect(nombreEquipo('octavos', 8, 1)).toBe('1° - Grupo H');
            expect(nombreEquipo('octavos', 8, 2)).toBe('2° - Grupo G');
        });
        it('deberia mostrar los primeros equipos del grupo A en sus respectivos partidos', function () {
            browser().navigateTo('/');

            // Bra 1 - 1 Cro
            ponerResultado('A', 1, 1, 1);
            ponerResultado('A', 1, 2, 1);
            // 1 - 1
            ponerResultado('A', 2, 1, 1);
            ponerResultado('A', 2, 2, 1);
            // Bra 3 - 0 Mex
            ponerResultado('A', 3, 1, 3);
            ponerResultado('A', 3, 2, 0);
            // Cam 0 - 3 Cro
            ponerResultado('A', 4, 1, 0);
            ponerResultado('A', 4, 2, 3);
            // Cam 0 - 3 Bra
            ponerResultado('A', 5, 1, 0);
            ponerResultado('A', 5, 2, 3);
            // Cro 1 - 1 Mex
            ponerResultado('A', 6, 1, 1);
            ponerResultado('A', 6, 2, 1);

            botonLlaves().click();

            expect(nombreEquipo('octavos', 1, 1)).toBe('Brasil');
            expect(nombreEquipo('octavos', 5, 2)).toBe('Croacia');
        });
    });

    describe('Cuartos', function () {
        it('deberia mostrar los equipos a enfrentarse antes de que finalicen los octavos', function () {
            botonLlaves().click();
            expect(cantidadDePartidos('cuartos')).toBe(4);
            expect(nombreEquipo('cuartos', 1, 1)).toBe('Ganador octavos 1');
            expect(nombreEquipo('cuartos', 1, 2)).toBe('Ganador octavos 2');
            expect(nombreEquipo('cuartos', 2, 1)).toBe('Ganador octavos 3');
            expect(nombreEquipo('cuartos', 2, 2)).toBe('Ganador octavos 4');
            expect(nombreEquipo('cuartos', 3, 1)).toBe('Ganador octavos 5');
            expect(nombreEquipo('cuartos', 3, 2)).toBe('Ganador octavos 6');
            expect(nombreEquipo('cuartos', 4, 1)).toBe('Ganador octavos 7');
            expect(nombreEquipo('cuartos', 4, 2)).toBe('Ganador octavos 8');
        });
        it('deberia enfrentar a los ganadores de octavos', function () {
            browser().navigateTo('/');
            // Bra 1 - 1 Cro
            ponerResultado('A', 1, 1, 1);
            ponerResultado('A', 1, 2, 1);
            // 1 - 1
            ponerResultado('A', 2, 1, 1);
            ponerResultado('A', 2, 2, 1);

            // Bra 3 - 0 Mex
            ponerResultado('A', 3, 1, 3);
            ponerResultado('A', 3, 2, 0);
            // Cam 0 - 3 Cro
            ponerResultado('A', 4, 1, 0);
            ponerResultado('A', 4, 2, 3);
            // Cam 0 - 3 Bra
            ponerResultado('A', 5, 1, 0);
            ponerResultado('A', 5, 2, 3);
            // Cro 1 - 1 Mex
            ponerResultado('A', 6, 1, 1);
            ponerResultado('A', 6, 2, 1);

            // Esp 1 - 1 Hol
            ponerResultado('B', 1, 1, 1);
            ponerResultado('B', 1, 2, 1);
            // Chi 1 - 1 Aus
            ponerResultado('B', 2, 1, 1);
            ponerResultado('B', 2, 2, 1);
            // Esp 3 - 0 Chi
            ponerResultado('B', 3, 1, 3);
            ponerResultado('B', 3, 2, 0);
            // Aus 0 - 3 Hol
            ponerResultado('B', 4, 1, 0);
            ponerResultado('B', 4, 2, 3);
            // Aus 0 - 3 Esp
            ponerResultado('B', 5, 1, 0);
            ponerResultado('B', 5, 2, 3);
            // Hol 1 - 1 Chi
            ponerResultado('B', 6, 1, 1);
            ponerResultado('B', 6, 2, 1);

            botonLlaves().click();

            expect(nombreEquipo('octavos', 1, 1)).toBe('Brasil');
            expect(nombreEquipo('octavos', 1, 2)).toBe('Holanda');

            // partido 1 de octavos: Bra 2-0 Hol
            ponerResultadoEnLlave('octavos', 1, 1, 2);
            ponerResultadoEnLlave('octavos', 1, 2, 0);

            tabDeLlave('cuartos').click();

            expect(nombreEquipo('cuartos', 1, 1)).toBe('Brasil');
        });
    });

    function claseDeTabDelGrupo(letra) {
        return element('#partidos li:eq(' + letraANumero(letra) + ')').attr('class');
    }

    function cantidadDePartidosDelGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .partido').count();
    }

    function tabDelGrupo(letra) {
        return element('#partidos li:eq(' + letraANumero(letra) + ') a');
    }

    function botonCompletarGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .completar-grupo');
    }

    function resultadosGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .resultado:eq(0)').val();
    }

    function botonCompletarGruposDelGrupo(letra) {
        return element('.tab-pane:eq(' + letraANumero(letra) + ') .completar-grupos');
    }

    function obtenerResultado(grupo, partido, equipo) {
        return element('.tab-pane:eq(' + letraANumero(grupo) + ') .partido:eq(' + (partido - 1) + ') .resultado:eq(' + (equipo - 1) + ')').val();
    }

    function ponerResultado(grupo, partido, equipo, resultado) {
        using('.tab-pane:eq(' + letraANumero(grupo) + ') .partido:eq(' + (partido - 1) + ')').input('partidos.' + grupo + '[$index].resultado[' + (equipo - 1) + ']').enter(resultado);
    }

    function letraANumero(letra) {
        letra = letra.toUpperCase();
        var numero = letra.charCodeAt(0) - 65;
        return numero;
    }

    function botonLlaves() {
        return element('#llaves');
    }

    function cantidadDePartidos(llave) {
        var index = llaveAIndice(llave);
        return element('.tab-pane:eq(' + index + ') .partido').count();
    }

    function nombreEquipo(llave, partido, equipo) {
        var index = llaveAIndice(llave);
        return element('.tab-pane:eq(' + index + ') .partido:eq(' + (partido - 1) + ') .equipo:eq(' + (equipo - 1) + ')').text();
    }

    function llaveAIndice(llave) {
        var index = null;
        switch (llave) {
        case 'octavos':
            index = 0;
            break;
        case 'cuartos':
            index = 1;
            break;
        case 'semis':
            index = 2;
            break;
        case 'final':
            index = 3;
            break;
        }
        return index;
    }

    function tabDeLlave(llave) {
        return element('#llaves li:eq(' + llaveAIndice(llave) + ') a');
    }

    function ponerResultadoEnLlave(llave, partido, equipo, resultado) {
        input('partidos.' + llave + '[' + (partido - 1) + '].resultado[' + (equipo - 1) + ']').enter(resultado);
    }

}());
